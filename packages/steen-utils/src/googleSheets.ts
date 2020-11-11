import {BareRecord} from "./types/records/BareRecord";
import * as parsers from './parsers';
import {DoubleArrayParser} from "./DoubleArrayParser";
import {SimpleSynset} from "./types";

export type HasSlavicTranslations = {
  ru: SimpleSynset | null;
  be: SimpleSynset | null;
  uk: SimpleSynset | null;
  pl: SimpleSynset | null;
  cs: SimpleSynset | null;
  sk: SimpleSynset | null;
  bg: SimpleSynset | null;
  mk: SimpleSynset | null;
  sr: SimpleSynset | null;
  hr: SimpleSynset | null;
  sl: SimpleSynset | null;
};

export type TranslatedBareRecord = BareRecord & Partial<HasSlavicTranslations>;

export function createInterslavicRangeParser(targetLang: keyof HasSlavicTranslations) {
  return new DoubleArrayParser<TranslatedBareRecord>({
    id: parsers.id,
    genesis: parsers.genesis,
    partOfSpeech: parsers.partOfSpeech,
    isv: parsers.synset,
    [targetLang]: parsers.synset,
  }, ['id', 'isv', 'genesis', 'partOfSpeech', targetLang]);
}


export * from './types';
