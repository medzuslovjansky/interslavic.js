import {getEditingDistance} from "./getEditingDistance";

test.each([
  ['a', 'a', 0],
  ['a', 'ǎ', 0.5],
  ['אָ', 'א', 0.5],
  ['noc', 'nòč', 1],
  ['ся', 'сьа', 0],
  ['сю', 'сьу', 0],
  ['сь', 'с', 0.5],
])('getEditingDistance(%j, %j) should equal %d', (a, b, expected) => {
  expect(getEditingDistance(a, b)).toBe(expected);
  expect(getEditingDistance(b, a)).toBe(expected);
});
