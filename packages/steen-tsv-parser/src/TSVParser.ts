import {Raw} from "./types/atomic/RawT1";
import {MapperContext, ParserMappers} from "./types/ParserMappersT1";
import {splitIterable} from "./utils/split";

export class TSVParser<Record> {
  constructor(
    protected readonly mappings: ParserMappers<Record>,
    protected readonly columns: (keyof Record)[] = Object.keys(mappings) as any,
  ) {}

  public *parse(tsv: string): IterableIterator<Record> {
    const context: MapperContext<Record> = {
      row: '',
      rowIndex: -1,
      rawRecord: null as any,
      record: null as any,
      key: '' as any,
      value: '',
    };

    for (const row of splitIterable(tsv, '\n')) {
      context.row = row.trim();
      context.rowIndex += 1;

      if (!context.row) {
        continue;
      }

      if (context.rowIndex === 0) {
        this.validateHeader(row);
      } else {
        context.rawRecord = this.parseRaw(row);

        try {
          const record = this.mapRecord(context);
          yield record;
        } catch (e) {
          const jKey = JSON.stringify(context.key);
          const jValue = JSON.stringify(context.value);

          throw new Error(`Failed to parse property ${jKey} (=${jValue}) in:\n${context.row}`);
        }
      }
    }
  }

  private validateHeader(str: string) {
    const actual = str.trim().split(/\s*\t\s*/).join('\t');
    const expected = this.columns.join('\t');

    if (actual !== expected) {
      throw new Error([
        'Invalid TSV format!',
        'Expected: ' + expected,
        'Actual: ' + actual,
      ].join('\n'));
    }
  }

  private parseRaw(row: string): Raw<Record> {
    const record: Partial<Raw<Record>> = {};
    let index = 0;

    for (const cell of splitIterable(row, '\t')) {
      const key: keyof Record = this.columns[index];
      record[key] = cell.trim();
      index += 1;
    }

    return record as Raw<Record>;
  }

  private mapRecord(context: MapperContext<Record>): Record {
    context.record = {};

    const keys = Object.keys(this.mappings) as (keyof Record)[];
    for (const key of keys) {
      const mapper = this.mappings[key];

      context.key = key;
      context.value = context.rawRecord[key] ?? '';
      context.record[key] = mapper(context);
    }

    return context.record as Record;
  }
}
