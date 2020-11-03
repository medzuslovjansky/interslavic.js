import {interslavicRangeParser} from "./googleSheets";

test('DoubleArrayParser should skip empty line', () => {
  const rows = [
    [],
    ['123', 'abo', '', 'conj.'],
  ];
  expect(interslavicRangeParser.parse(rows)).toEqual([
    {
      "genesis": null,
      "id": 123,
      "isv": {
        "meta": {"autotranslated": false, "debatable": false},
        "options": [
          {"value": "abo"}
        ]
      },
      "partOfSpeech": {"name": "conjunction"}
    }
  ]);
});
