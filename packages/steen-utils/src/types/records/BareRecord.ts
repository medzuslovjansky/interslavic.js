import {SimpleSynset} from "../columns/SimpleSynset";
import {PartOfSpeech} from "../columns/PartOfSpeech";

export type BareRecord = {
  id: number;
  isv: SimpleSynset | null;
  partOfSpeech: PartOfSpeech | null;
};
