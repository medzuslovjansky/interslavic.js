import Sheet = GoogleAppsScript.Spreadsheet.Sheet;

import {Multirator} from "@interslavic/odometer";
import {interslavicRangeParser} from "@interslavic/steen-utils/dist/googleSheets";

export class RunFlavorizationScript {
  protected readonly activeSpreadSheet = SpreadsheetApp.getActive();
  protected readonly ruleSheet = this.activeSpreadSheet.getActiveSheet();
  protected readonly wordsSheet = this.getSheet('Example words');
  protected readonly wordsSheetHeaders = this.getWordsSheetsHeaders();
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

  protected getRulesLanguage(): string {
    const name = this.ruleSheet.getName();
    if (name.startsWith('Rules [') && name.endsWith(']')) {
      return name.slice(name.indexOf('[') + 1, -1);
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

  protected getWordsSheetsHeaders(): string[] {
    const [headers] = this.wordsSheet.getSheetValues(1, 1, 1, this.wordsSheet.getLastColumn());
    if (!headers.join(',').startsWith('id,isv,genesis,partOfSpeech,')) {
      throw new Error(
        'Invalid structure of Example words sheets.\n' +
        'Expected: id,isv,genesis,partOfSpeech,...'
      );
    }

    return headers;
  }

  protected getWordsSheetsLanguageColumnIndex(language: string = this.getRulesLanguage()): number {
    const index = this.wordsSheetHeaders.indexOf(language);
    if (index === -1) {
      throw new Error(
        `Invalid structure of Example words sheets.\n` +
        `Expected to find column ${language}, but found only:\n` +
        this.wordsSheetHeaders.join(',')
      );
    }

    return index + 1;
  }

  public execute(language?: string): void {
    const R = this.wordsSheet.getLastRow();

    const readRange = this.wordsSheet.getSheetValues(
      2,
      1,
      R - 1,
      4,
    );

    const langColumnIndex = this.getWordsSheetsLanguageColumnIndex(language);
    const fullWriteRange = this.wordsSheet.getRange(
      2,
      langColumnIndex,
      R - 1,
      1,
    );

    fullWriteRange.clearContent();
    fullWriteRange.clearNote();

    const maxBatchSize = 100;
    for (let i = 2; i <= R; i += maxBatchSize) {
      const batchSize = Math.min(R + 1, i + maxBatchSize) - i;
      const batchedValues = new Array<[string]>(batchSize);
      const batchedNotes = new Array<[string]>(batchSize);
      batchedValues.fill(['']);
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

        const [record] = interslavicRangeParser.parse([[], row])
        if (!record.isv) {
          continue;
        }

        const result = this.multirator.process(record);
        batchedValues[j] = [result.map(r => r.value).join('; ')];
        batchedNotes[j] = [result.map(r => `${r.value}: ${r.appliedRules}`).join('\n')];
      }

      partialWriteRange.setValues(batchedValues);
      partialWriteRange.setNotes(batchedNotes);
    }
  }
}

