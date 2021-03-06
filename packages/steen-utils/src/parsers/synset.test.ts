import {parseSynset} from "./synset";
import {parsePartOfSpeech} from "./partOfSpeech";

describe('parseSynset', () => {
  test.each([
    ['', ''],
    ['!', ''],
    ['#', ''],
    ['#!', ''],
    ['!#', ''],
    ['!#course', ''],
    ['!U-Boot', ''],
    ['#co-worker', ''],
    ['#!only, ĝuste nun', ''],
    ['з\'явитися', 'v. refl.'],
    ['по, за (напр.: по грибы, за хлебом)', ''],
    ['собака (символ) [@]', 'f.'],
    ['реформација (верски / политички покрет)', 'f.'],
    ['there was/were not', 'phrase'],
    ['будет / будут', ''],
    ['и; а, зато (смысл2)', 'conj.'],
    ['Добрий ранок!; Доброго ранку!', 'phrase'],
  ])('should parse synset: %s', (value: string, pos: string) => {
    expect(parseSynset({
      record: { partOfSpeech: parsePartOfSpeech(pos) || undefined },
      rawRecord: { partOfSpeech: pos },
      key: 'slavicLang',
      value,
      row: value,
      rowIndex: 0,
    })).toMatchSnapshot();
  });
});
