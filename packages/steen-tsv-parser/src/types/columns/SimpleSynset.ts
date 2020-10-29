import {Lemma} from "../atomic/Lemma";

export type SimpleSynset = {
  meta: {
    autotranslated: boolean;
    debatable: boolean;
  };
  options: Lemma[];
};
