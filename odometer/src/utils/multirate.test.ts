import {russian} from "../flavorize";
import {Entry, getCases} from "../db/cases";

describe('Russian multirator', () => {
    test.each(
        getCases(0, 1).map(entry => [entry.lemma, entry])
    )('should convert %s', (...args: any[]) => {
        const str = args[0] as string;
        const { lemma, partOfSpeech } = args[1] as Entry;

        expect(russian.convert(lemma, partOfSpeech).join('; ')).toMatchSnapshot(str);
    });
});
