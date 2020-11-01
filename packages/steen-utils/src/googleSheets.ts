import {BareRecord} from "./types/records/BareRecord";
import * as parsers from './parsers';
import {DoubleArrayParser} from "./DoubleArrayParser";

export const interslavicRangeParser = new DoubleArrayParser<BareRecord>({
  id: parsers.id,
  isv: parsers.synset,
  genesis: parsers.genesis,
  partOfSpeech: parsers.partOfSpeech,
});

export * from './types';
