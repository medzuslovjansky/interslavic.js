import {interslavicRangeParser} from "./googleSheets";

test('DoubleArrayParser should skip empty line', () => {
  expect(interslavicRangeParser.parse([
    [],
    ['123', 'abo', '', 'conj.'],
  ])).toEqual(1234);
})
