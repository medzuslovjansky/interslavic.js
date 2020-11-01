import {SimpleSynset} from "../columns/SimpleSynset";
import {PartOfSpeech} from "../columns/PartOfSpeech";
import {Genesis} from "../columns/Genesis";

export type BareRecord = {
  id: number;
  isv: SimpleSynset | null;
  genesis: Genesis | null;
  partOfSpeech: PartOfSpeech | null;
};
