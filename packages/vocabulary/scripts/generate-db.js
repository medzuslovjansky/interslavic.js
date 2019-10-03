const _ = require('lodash');

const dictionaries = {
  en: require('../external/steen-en').filter(Boolean),
  pl: require('../external/steen-pl').filter(Boolean),
};

const morphologyPrefixes = {
  "adj.": "adjective",
  "adv.": "adverb",
  "conj.": "conjugation",
  "f.": "noun_f",
  "f.indecl.": "noun_f_indecl",
  "f.pl.": "noun_f_pl",
  "f.sg.": "noun_f_sg",
  "intj.": "interjection",
  "m.": "noun_m",
  "m./f.": "noun_m_f",
  "m.anim.": "noun_m_anim",
  "m.indecl.": "noun_m_indecl",
  "m.pl.": "noun_m_pl",
  "m.sg.": "noun_m_sg",
  "n.": "noun_n",
  "n.indecl.": "noun_n_indecl",
  "n.pl.": "noun_n_pl",
  "n.sg.": "noun_n_sg",
  "num.": "numeral",
  "num.card.": "numeral_card",
  "num.coll.": "numeral_coll",
  "num.diff.": "numeral_diff",
  "num.fract.": "numeral_fract",
  "num.mult.": "numeral_mult",
  "num.ord.": "numeral_ord",
  "num.subst.": "numeral_subst",
  "particle": "particle",
  "phrase": "phrase",
  "prefix": "prefix",
  "prep.": "preposition_",
  "prep. + gen.": "preposition_gen",
  "pron.dem.": "pronoun_dem",
  "pron.indef.": "pronoun_indef",
  "pron.int.": "pronoun_int",
  "pron.pers.": "pronoun_pers",
  "pron.poss.": "pronoun_poss",
  "pron.rec.": "pronoun_rec",
  "pron.refl.": "pronoun_refl",
  "pron.rel.": "pronoun_rel",
  "suffix": "suffix",
  "v.aux. ipf.": "verb_aux_ipf",
  "v.aux. pf.": "verb_aux_pf",
  "v.intr. ipf.": "verb_intr_ipf",
  "v.intr. ipf./pf.": "verb_intr_ipf_pf",
  "v.intr. pf.": "verb_intr_pf",
  "v.ipf.": "verb_ipf",
  "v.pf.": "verb_pf",
  "v.refl. ipf.": "verb_refl_ipf",
  "v.refl. ipf./pf.": "verb_refl_ipf_pf",
  "v.refl. pf.": "verb_refl_pf",
  "v.tr. ipf.": "verb_tr_ipf",
  "v.tr. ipf./pf.": "verb_tr_ipf_pf",
  "v.tr. pf.": "verb_tr_pf"
};

const morphologyAbbr = {
  "adj.": "adjective",
  "adv.": "adverb",
  "conj.": "conjugation",
  "f.": "noun (feminine)",
  "f.indecl.": "noun (feminine, indeclinable)",
  "f.pl.": "noun (feminine, plural)",
  "f.sg.": "noun (feminine, single)",
  "intj.": "interjection",
  "m.": "noun (masculine)",
  "m./f.": "noun (masculine, feminine)",
  "m.anim.": "noun (masculine, animate)",
  "m.indecl.": "noun (masculine, indeclinable)",
  "m.pl.": "noun (masculine, plural)",
  "m.sg.": "noun (masculine, single)",
  "n.": "noun (neuter)",
  "n.indecl.": "noun (neuter, indeclinable)",
  "n.pl.": "noun (neuter, plural)",
  "n.sg.": "noun (neuter, single)",
  "num.": "numeral",
  "num.card.": "numeral (cardinal)",
  "num.coll.": "numeral (collective)",
  "num.diff.": "numeral (differential)",
  "num.fract.": "numeral (fractional)",
  "num.mult.": "numeral (multiplicative)",
  "num.ord.": "numeral (ordinal)",
  "num.subst.": "numeral (substantivised)",
  "particle": "particle",
  "phrase": "phrase",
  "prefix": "prefix",
  "prep.": "preposition",
  "prep. + gen.": "preposition (genitive)",
  "pron.dem.": "pronoun (demonstrative)",
  "pron.indef.": "pronoun (indefinite)",
  "pron.int.": "pronoun (intensive)",
  "pron.pers.": "pronoun (personal)",
  "pron.poss.": "pronoun (possesive)",
  "pron.rec.": "pronoun (reciprocal)",
  "pron.refl.": "pronoun (reflexive)",
  "pron.rel.": "pronoun (relative)",
  "suffix": "suffix",
  "v.aux. ipf.": "verb (auxiliary, imperfect)",
  "v.aux. pf.": "verb (auxiliary, perfect)",
  "v.intr. ipf.": "verb (intransitive, imperfect)",
  "v.intr. ipf./pf.": "verb (intransitive, imperfect, perfect)",
  "v.intr. pf.": "verb (intransitive, perfect)",
  "v.ipf.": "verb (imperfect)",
  "v.pf.": "verb (perfect)",
  "v.refl. ipf.": "verb (reflexive, imperfect)",
  "v.refl. ipf./pf.": "verb (reflexive, imperfect, perfect)",
  "v.refl. pf.": "verb (reflexive, perfect)",
  "v.tr. ipf.": "verb (transitive, imperfect)",
  "v.tr. ipf./pf.": "verb (transitive, imperfect, perfect)",
  "v.tr. pf.": "verb (transitive, perfect)"
};

function deserialize({ en, pl }) {
  // ! ) - . / ? @ [ ]

  // extra case ... -> ___
  // ! -> DEL
  // ) -> DEL

  function* all(words, lang) {
    for (let i = 0; i < words.length; i++) {
      yield* one(words[i], i, lang);
    }
  }

  function* one(entry, index, lang) {
      const [commaWords, commaIrregularities, morphology, category, commaTranslations, intelligibility, etymology] = entry.split('\t');
      const words = commaWords.split(/,\s*/);
      const translations = commaTranslations.split(/,\s*/);

      for (const value of words) {
          yield {
            value,
            index,
            entry,
            ...irregularities(commaIrregularities),
            morphology,
            category,
            translations: {
              [lang]: commaTranslations,
            },
            intelligibility,
            etymology
          };
      }
  }

  function escape(value) {
    return value
      .replace(/\s?\.{3}\s?/g, '___')
      .replace(/\[[^\]]*\]/g, '')
      .replace(/[\)\.\!\?]/g, '')
      .replace(/[\-\/ ]/g, '_')
  }

  function id(entry) {
    if (!entry.morphology.trim()) {
      throw new Error('no morphology');
    }
    
    return _.compact([
      morphologyPrefixes[entry.morphology] || ((() => {throw 42})()),
      escape(entry.value),
      entry.useCase !== void 0 ? ('_C' + entry.useCase) : ''
    ]).join('_').toLowerCase();
  }

  function irregularities(serialized) {
      if (!serialized.endsWith(')')) {
          return {};
      }

      if (serialized.startsWith('(+')) {
          return { useCase: Number(serialized.slice(2, -1)) };
      }

      return { forms: serialized.slice(1, -1).split(',') };
  }

  const WEIRD = /[\)\.\/]/;

  const map = _.chain([])
    .concat([...all(en, 'en')])
    .concat([...all(pl, 'pl')])
    .groupBy(id)
    .mapValues((langs, id) => {
      const r = langs.reduce((a, b) => _.merge(a, b), {})
      r.id = id;
      return r;
    })
    .values()
    // .filter(x => WEIRD.test(x.value))
    // .map(x => x.value.toLowerCase())
    // .flatMap(x => x.split(''))
    // .uniq()
    // .sortBy('id')
    // .map(x => JSON.stringify(x, null, 4))
    .orderBy('index')
    // .shuffle()
    // .take(10)
    .transform(({ so, en, pl }, { useCase, value, translations, morphology }) => {
        const extras = useCase !== void 0 ? `${morphology}, +${useCase}` : morphology;
        const id = `${value} (${extras})`;
        if (so.hasOwnProperty(id)) {
          throw new Error('Duplicate identifier: ' + id);
        }

        so[id] = {
          message: value,
          description: morphologyAbbr[morphology] || ((() => {throw 42})())
        };
        en[id] = {
          message: translations.en,
          description: morphologyAbbr[morphology] || ((() => {throw 42})())
        };
        pl[id] = {
          message: translations.pl,
          description: morphologyAbbr[morphology] || ((() => {throw 42})())
        };
    }, { so: {}, en: {}, pl: {} })
    .value();

  const output = JSON.stringify(map.pl, null, 2); // map.join('\n');

  console.log(output);
}



deserialize(dictionaries);

/*

Object.values();
const dictionary = Object.values();

function main() {
  console.log(JSON.stringify([...steenDeserializeAll()], null, 4));
}




main();

*/
