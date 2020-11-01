import {Raw} from "./types/atomic/RawT1";
import {MapperContext, ParserMappers} from "./types/ParserMappersT1";

export class DoubleArrayParser<Record> {
  constructor(
    protected readonly mappings: ParserMappers<Record>,
    protected readonly columns: (keyof Record)[] = Object.keys(mappings) as any,
  ) {}

  public parse(rows: string[][]): Record[] {
    const context: MapperContext<Record> = {
      row: '',
      rowIndex: -1,
      rawRecord: null as any,
      record: null as any,
      key: '' as any,
      value: '',
    };

    const result: Record[] = [];
    for (const row of rows) {
      context.row = row.join('\t');
      context.rowIndex += 1;

      if (!context.row) {
        continue;
      }

      if (context.rowIndex === 0) {
        this.validateHeader(row);
      } else {
        context.rawRecord = this.parseRaw(row);

        try {
          result.push(this.mapRecord(context));
        } catch (e) {
          const jKey = JSON.stringify(context.key);
          const jValue = JSON.stringify(context.value);

          throw new Error(`Failed to parse property ${jKey} (=${jValue}) in:\n${context.row}`);
        }
      }
    }

    return result;
  }

  private validateHeader(cells: string[]) {
    const actual = cells.join('\t');
    const expected = this.columns.join('\t');

    if (actual !== expected) {
      throw new Error([
        'Invalid sheet format!',
        'Expected: ' + expected,
        'Actual: ' + actual,
      ].join('\n'));
    }
  }

  private parseRaw(row: string[]): Raw<Record> {
    const record: Partial<Raw<Record>> = {};
    let index = 0;

    for (const cell of row) {
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
