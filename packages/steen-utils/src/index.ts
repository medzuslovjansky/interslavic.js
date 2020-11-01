import {BareRecord} from "./types/records/BareRecord";
import {WordsRecord} from "./types/records/WordsRecord";
import {WordsAddLangRecord} from "./types/records/WordsAddLangRecord";
import * as parsers from './parsers';
import {TSVParser} from "./TSVParser";

export const words = new TSVParser<WordsRecord>({
  id: parsers.id,
  isv: parsers.synset,
  addition: s => s.value,
  partOfSpeech: parsers.partOfSpeech,
  type: parsers.voteStatus,
  en: parsers.synset,
  sameInLanguages: parsers.sameInLanguages,
  genesis: parsers.genesis,
  ru: parsers.synset,
  be: parsers.synset,
  uk: parsers.synset,
  pl: parsers.synset,
  cs: parsers.synset,
  sk: parsers.synset,
  bg: parsers.synset,
  mk: parsers.synset,
  sr: parsers.synset,
  hr: parsers.synset,
  sl: parsers.synset,
  cu: parsers.synset,
  de: parsers.synset,
  nl: parsers.synset,
  eo: parsers.synset,
  frequency: parsers.crudeFrequency,
  using_example: s => s.value || undefined,
});

export const wordsAddLang = new TSVParser<WordsAddLangRecord>({
  id: parsers.id,
  isv: parsers.synset,
  addition: s => s.value,
  partOfSpeech: parsers.partOfSpeech,
  type: parsers.voteStatus,
  en: parsers.synset,
  sameInLanguages: parsers.sameInLanguages,
  genesis: parsers.genesis,
  ru: parsers.synset,
  pl: parsers.synset,
  cs: parsers.synset,
  de: parsers.synset,
  csb: parsers.synset,
  dsb: parsers.synset,
  hsb: parsers.synset,
  ia: parsers.synset,
  es: parsers.synset,
  pt: parsers.synset,
  fr: parsers.synset,
  it: parsers.synset,
  he: parsers.synset,
  da: parsers.synset,
});

export const bare = new TSVParser<BareRecord>({
  id: parsers.id,
  isv: parsers.synset,
  genesis: parsers.genesis,
  partOfSpeech: parsers.partOfSpeech,
});

export * from './types';
