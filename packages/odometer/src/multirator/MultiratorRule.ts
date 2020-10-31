import {PartOfSpeechPredicate, Replacement} from "./Multirator";

export interface MultiratorRule {
  readonly id: string;
  readonly match: RegExp;
  readonly partOfSpeech: PartOfSpeechPredicate;
  readonly replaceWith: Replacement[];
}
