import Sheet = GoogleAppsScript.Spreadsheet.Sheet;

import {Multirator} from "@interslavic/odometer";
import {createInterslavicRangeParser} from "@interslavic/steen-utils/dist/googleSheets";
import {compressToRanges} from "./compressToRanges";
import {SimpleSynset, SlavicLanguage} from "@interslavic/steen-utils";

export class RunFlavorizationScript {
  protected readonly activeSpreadSheet = SpreadsheetApp.getActive();
  protected readonly ruleSheet = this.activeSpreadSheet.getActiveSheet();
  protected readonly wordsSheet = this.getSheet('Example words');
  protected readonly playgroundSheet = this.getSheet('Playground');
  protected readonly debugSheet = this.getSheet('Debug Console');
  protected readonly multirator: Multirator;

  constructor(lang?: string) {
    this.ruleSheet = lang
      ? this.getSheet(`Rules [${lang}]`)
      : this.activeSpreadSheet.getActiveSheet();

    this.multirator = this.prepareMultirator();
  }

  protected getSheet(name: string): Sheet {
    const sheet = this.activeSpreadSheet.getSheetByName(name);
    if (!sheet) {
      throw new Error(`Failed to find a sheet by name: ${name}`)
    }

    return sheet;
  }

  protected getRulesLanguage(): SlavicLanguage {
    const name = this.ruleSheet.getName();
    if (name.startsWith('Rules [') && name.endsWith(']')) {
      return name.slice(name.indexOf('[') + 1, -1) as any;
    }

    throw new Error('Cannot run on sheets different from Rules[<lang>]');
  }

  protected prepareMultirator(): Multirator {
    const [headers, ...rawRules] = this.ruleSheet.getSheetValues(
      1,
      1,
      this.ruleSheet.getLastRow(),
      this.ruleSheet.getLastColumn(),
    );

    const ruleSheet = this.ruleSheet;
    function verifyHeaders(this: string[], header: string, index: number) {
      if (header !== this[index]) {
        throw new Error(`
          Corrupted rules sheet "${ruleSheet.getName()}"!
          Expected column ${String.fromCharCode(65 + index)} to be ${JSON.stringify(header)}, but received: ${JSON.stringify(this[index])}
        `);
      }
    }

    ['#', 'Match', 'POS', 'Genesis', 'Replace 1'].forEach(verifyHeaders, headers);

    const multirator = new Multirator();
    for (const rule of rawRules.filter(r => r[1].trim())) {
      if (!rule[0]) {
        continue;
      }

      try {
        new RegExp(rule[1]);
      } catch (err) {
        throw new Error(`Bad regexp in rule ${rule[0]}:\n${err}`);
      }

      multirator.add({
        id: rule[0],
        match: rule[1],
        partOfSpeech: rule[2],
        genesis: rule[3],
        replaceWith: rule.slice(4),
      });
    }

    return multirator;
  }

  protected getLangColumnIndex(sheetKey: 'wordsSheet' | 'playgroundSheet', language: string): number {
    const sheet = this[sheetKey];
    const [headers] = sheet.getSheetValues(1, 1, 1, this.wordsSheet.getLastColumn());
    const index = headers.indexOf(language);
    if (index === -1) {
      throw new Error(
        `Invalid structure of "${sheet.getName()}" sheet.\n` +
        `Expected to find column ${language}, but found only:\n` +
        headers.join(',')
      );
    }

    return index + 1;
  }

  public execute(language: string = this.getRulesLanguage()): void {
    const R = this.wordsSheet.getLastRow();

    const readRange = this.wordsSheet.getSheetValues(
      2,
      1,
      R - 1,
      4,
    );

    const langColumnIndex = this.getLangColumnIndex('wordsSheet', language);
    const fullWriteRange = this.wordsSheet.getRange(
      2,
      langColumnIndex,
      R - 1,
      1,
    );

    const fullWriteRangeRows = fullWriteRange.getValues();
    /* add translation column */
    for (let i = 0; i < fullWriteRangeRows.length; i++) {
      readRange[i].push(fullWriteRangeRows[i][0]);
    }

    fullWriteRange.clearNote();

    const readParser = createInterslavicRangeParser(language as any);
    const maxBatchSize = 100;
    for (let i = 2; i <= R; i += maxBatchSize) {
      const batchSize = Math.min(R + 1, i + maxBatchSize) - i;
      const batchedBackgrounds = new Array<[string]>(batchSize);
      const batchedNotes = new Array<[string]>(batchSize);
      batchedBackgrounds.fill(['']);
      batchedNotes.fill(['']);

      const partialWriteRange = this.wordsSheet.getRange(
        i,
        langColumnIndex,
        batchSize,
        1,
      );

      for (let j = 0; j < batchSize; j++) {
        const row = readRange[i - 2 + j];
        if (!row[0] || !row[1]) {
          continue;
        }

        const [record] = readParser.parse([[], row])
        // @ts-ignore
        const targetTranslation: SimpleSynset | null = record[language];
        if (!record.isv || !targetTranslation) {
          continue;
        }

        const result = this.multirator.process(record);
        const distance = this.multirator.getDifference(result, targetTranslation);
        batchedBackgrounds[j] = [
          (distance > 0.5) ? '#f4bfbe' :
          (distance > 0.4) ? '#f2c5a6' :
          (distance > 0.25) ? '#f0f5bb' :
          (distance > 0.1) ? '#d5fcad' : '#98fb98'
        ];

        batchedNotes[j] = [
          [
            `D = ${distance}`,
            ...result.map(r => `${r.value}: ${r.appliedRules}`)
          ].join('\n')
        ];
      }

      partialWriteRange.setBackgrounds(batchedBackgrounds);
      partialWriteRange.setNotes(batchedNotes);
    }

    this.updateStats();
  }

  public flavorize(): void {
    const language = this.getRulesLanguage();
    const recordsCount = this.playgroundSheet.getLastRow() - 1;
    const isvColumnIndex = this.getLangColumnIndex('playgroundSheet', 'isv');
    const langColumnIndex = this.getLangColumnIndex('playgroundSheet', language);

    const readRange = this.playgroundSheet.getSheetValues(2, isvColumnIndex, recordsCount, 1);
    const fullWriteRange = this.playgroundSheet.getRange(2, langColumnIndex, recordsCount, 1);
    fullWriteRange.clear();

    const flyweightSynset: SimpleSynset = {
      meta: {
        autotranslated: false,
        debatable: false,
      },
      options: [
        {
          value: '',
        }
      ]
    };

    const values: [string][] = [];
    for (let i = 0; i < recordsCount; i++) {
      const [phrase] = readRange[i];
      flyweightSynset.options[0].value = phrase;

      const [firstResult] = this.multirator.process({
        id: i,
        isv: flyweightSynset,
        genesis: null,
        partOfSpeech: null,
      });

      values.push([firstResult.value]);
    }

    fullWriteRange.setValues(values);
  }

  updateStats() {
    const stats = this.multirator.getStats();
    const totalRows = this.ruleSheet.getLastRow();
    const ids = this.ruleSheet.getSheetValues(2, 1, totalRows - 1, 1);
    const maxApplyCount = Math.max(0, ...[...stats.values()].map(a => a.length));

    for (let i = 0; i < ids.length; i++) {
      const id: string = ids[i][0];
      const ruleStats = stats.get(id);

      if (ruleStats) {
        const cell = this.ruleSheet.getRange(2 + i, 2);
        const percentage = ruleStats.length / maxApplyCount;
        const ranges = compressToRanges(ruleStats).join(', ');
        const pixelColor = 255 - Math.round(percentage * 125);
        cell.setNote(`Applied ${ruleStats.length} times on:\n${ranges}`)
        cell.setBackgroundRGB(pixelColor, 255, pixelColor);
      }
    }
  }
}

