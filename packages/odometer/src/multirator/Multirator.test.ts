import {createInterslavicRangeParser} from "@interslavic/steen-utils/dist/googleSheets";
import {Multirator} from "./Multirator";

test('rule pos', () => {
  const multirator = new Multirator([
    {
      id: '1',
      match: 'ti se$',
      genesis: '',
      partOfSpeech: 'v.',
      replaceWith: ['тися'],
    },
    {
      id: '2',
      match: 'bra',
      genesis: '',
      partOfSpeech: '',
      replaceWith: ['бра'],
    }
  ]);

  const [word] = createInterslavicRangeParser('ru').parse([[], [
    '1000',
    'brati se',
    '',
    'v. intr.pf.',
    'браться',
  ]])

  const flavor = multirator.process(word);
  const difference = multirator.getDifference(flavor, word.ru);

  expect(difference).toBeCloseTo(0.15, 1);
  expect(flavor).toEqual([
    {"appliedRules": ["1", "2"], "value": "братися"},
  ]);
});
