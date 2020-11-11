import {createInterslavicRangeParser} from "./googleSheets";

test('DoubleArrayParser should skip empty line', () => {
  const rows = [
    [],
    ['123', 'abo', '', 'conj.', 'або'],
  ];
  expect(createInterslavicRangeParser('uk').parse(rows)).toEqual([
    {
      "genesis": null,
      "id": 123,
      "isv": {
        "meta": {"autotranslated": false, "debatable": false},
        "options": [
          {"value": "abo"}
        ]
      },
      "partOfSpeech": {"name": "conjunction"},
      "uk": {
        "meta": {"autotranslated": false, "debatable": false},
        "options": [
          {"value": "або"}
        ]
      },
    }
  ]);
});
