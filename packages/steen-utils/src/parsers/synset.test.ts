import {parseSynset} from "./synset";

describe('parseSynset', () => {
  test.each([
    [''],
    ['!'],
    ['#'],
    ['#!'],
    ['!#'],
    ['!#course'],
    ['!U-Boot'],
    ['#co-worker'],
    ['#!only, ĝuste nun'],
    ['з\'явитися'],
    ['по, за (напр.: по грибы, за хлебом)'],
    ['собака (символ) [@]'],
    ['реформација (верски / политички покрет)'],
    ['there was/were not'],
    ['будет / будут'],
  ])('should parse synset: %s', (str: string) => {
    expect(parseSynset(str)).toMatchSnapshot();
  });
});
