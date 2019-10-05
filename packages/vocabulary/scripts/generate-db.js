const _ = require('lodash');
const { prefix, disambiguate } = require('./morphology');

_ .chain(require('../external/steen-en'))
  .slice(1)
  .map(s => s.split('\t'))
  .filter(s => s[0].includes('/'))
  // .map(1)

  //.filter(s => s[5].includes('alliance'))
  // .flatMap(s => s.split(' '))
  // .flatMap(s => s.split('/'))
  // .flatMap(s => s.split('+'))
  // .map(s => s.replace(/[\s*\(\)\:\~]/g, ''))
  // .filter(s => s.length < 5)

  // .map(s => {
  //     s[5] = s[5]
  //       .replace(/\s*\~?(be|c|s|h|k|cs|pl|uk|ru|bg|mk|sl|sb|sh|bm|sk|ub|yu|z|v|j)\~?\s*/g, ' ')
  //       .replace(/  +/g, ' ')
  //       .trim();

  //     return s;
  // })
  // .filter(s => s[5].length > 0)
  // .map(5)
  // .map(s => s.replace(/\b(be|cs|pl|uk|ru|bg|mk|sl|sb|sh|sk|z|v|j|hsb|rue|ocs|cz|iw|ub|yu|bm|csb|dsb|ns|hr|cu|ps|sr|re|n|i|ij|in|iz|jc|jn|sx)\b/g, '__'))
  // .map(s => s.replace(/~?__~?/g, '__'))
  // .map(s => s.replace(/  +/g, ' '))
  // .map(s => s.trim())
  .uniq()
  .sort()
  .thru(x => x.join('\n'))
  //.thru(x => x.map(s => `'${s}'`).join(' | '))
  .tap(console.log)
  .value();

/*
const resources = joinDictionaries({
  en: require('../external/steen-en').slice(1),
  pl: require('../external/steen-pl').slice(1),
});


function writeDictionary(lang) {

}

function toChromeI18N(lang, entry) {
  return {
    value: lang ? entry.translations[lang] : entry.value,
    description: entry.description,
  };
}

function joinDictionaries(dictionariesMap) {
  const result = {};

  for (const lang of Object.keys(dictionariesMap)) {
    const lines = dictionariesMap[lang];

    for (const entry of lines.map(deserialize)) {
      const id = uniqueId(entry);

      if (result[id]) {
        result[id].translations[lang] = entry.translation;
      } else {
        result[id] = result[id] || {
          value: composeEntryValue(entry),
          description: disambiguate(entry.morphology),
          translations: {
            [lang]: entry
          }
        };
      }
    }
  }
}

function locallyEnumerate(entries) {
  return _.chain(entries)
    .groupBy((entry) => prefix.short(entry.morphology))
    .mapValues((entriesByPartOfSpeech, partOfSpeech) => entriesByPartOfSpeech.map((entry, index) => {
      entry.key = partOfSpeech + '_' + (index + 1);
      return entry;
    }))
    .values()
    .flatten()
    .value();
}

function composeEntryValue(entry) {
    const {words, irregularities} = entry;
    if (irregularities) {
      const note = [
        irregularities.startsWith('(') ? '' : '('
        irregularities
        irregularities.startsWith(')') ? '' : ')'
      ].join('');

      return `${words} ${irregularities}`;
    } else {
      return words;
    }
}

function deserialize(line) {
    const [words, irregularities, morphology, _category, translation] = entry.split('\t');

    return {
      words,
      irregularities,
      morphology,
      translation
    };
}

function uniqueId(entry) {
    return [entry.value, entry.irregularities, entry.morphology].join('\t');
}
*/
