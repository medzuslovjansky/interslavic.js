import {russian} from "./index";
import {getCases} from "../db/cases";
import {PartOfSpeech} from "@interslavic/steen-utils";

describe('Russian multirator', () => {
    test.each(
      getCases(0, 1).map(entry => [entry.isv?.options[0].value ?? '', entry.partOfSpeech]) as any[]
    )('should convert %s', (lemma: string, partOfSpeech: PartOfSpeech) => {
        const result = russian.process(lemma, partOfSpeech);
        expect(result.map(l => l.value).join('; ')).toMatchSnapshot(lemma);
    });
});
