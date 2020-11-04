import {compressToRanges} from "./compressToRanges";

describe('compressToRanges', () => {
    test.each([
      [[], []],
      [[1], ['1']],
      [[1, 2], ['1-2']],
      [[1, 2, 4], ['1-2', '4']],
      [[1, 2, 4, 3], ['1-4']],
    ])('should compress %j to: %j', (arg, expected) => {
      const actual = compressToRanges(arg);
      expect(actual).toEqual(expected);
    });
});
