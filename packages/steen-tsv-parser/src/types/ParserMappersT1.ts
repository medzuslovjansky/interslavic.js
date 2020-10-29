import {Raw} from "./atomic/RawT1";

export type ParserMappers<Record> = {
  [Key in keyof Record]: PropertyMapper<Record, Record[Key]>;
};

export type PropertyMapper<Record = unknown, Value = unknown> =
  (context: MapperContext<Record>) => Value;

export type MapperContext<Record = unknown, Key = keyof Record> = {
  record: Partial<Record>;
  rawRecord: Raw<Record>;
  key: Key;
  value: string;
  row: string;
  rowIndex: number;
};
