import {interslavicRangeParser} from "@interslavic/steen-utils/dist/googleSheets";
import {Multirator} from "./Multirator";

test('rule pos', () => {
  const multirator = new Multirator([
    {
      id: '1',
      match: 'ti se$',
      genesis: '',
      partOfSpeech: 'v.',
      replaceWith: ['ться'],
    }
  ]);

  const [word] = interslavicRangeParser.parse([[], [
    '1000',
    'brati se',
    '',
    'v. intr.pf.',
  ]])

  expect(multirator.process(word)).toBe(true);
});
