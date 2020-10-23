import { expandPOSAbbreviation } from "./expandPOSAbbreviation";

import type {
    Adjective,
    Adverb,
    Conjunction,
    Interjection,
    Noun,
    Numeral,
    Particle,
    PartOfSpeech,
    Phrase,
    Prefix,
    Preposition,
    Pronoun,
    Suffix,
    Verb,
} from "./types";

describe('expandPOSAbbreviation', () => {
    test.each([
        ["adj.", <Partial<Adjective>>{ name: 'adjective'}],
        ["adv.", <Partial<Adverb>>{ name: 'adverb' }],
        ["conj.", <Partial<Conjunction>>{ name: 'conjunction' }],
        ["f.", <Partial<Noun>>{ name: 'noun', feminine: true }],
        ["f.indecl.", <Partial<Noun>>{ name: 'noun', feminine: true, indeclinable: true }],
        ["f.pl.", <Partial<Noun>>{ name: 'noun', feminine: true, plural: true }],
        ["f.sg.", <Partial<Noun>>{ name: 'noun', feminine: true, singular: true }],
        ["intj.", <Partial<Interjection>>{ name: 'interjection' }],
        ["m.", <Partial<Noun>>{ name: 'noun', masculine: true }],
        ["m./f.", <Partial<Noun>>{ name: 'noun', masculine: true, feminine: true }],
        ["m.anim.", <Partial<Noun>>{ name: 'noun', masculine: true, animate: true }],
        ["m.indecl.", <Partial<Noun>>{ name: 'noun', masculine: true, indeclinable: true }],
        ["m.pl.", <Partial<Noun>>{ name: 'noun', masculine: true, plural: true }],
        ["m.sg.", <Partial<Noun>>{ name: 'noun', masculine: true, singular: true }],
        ["n.", <Partial<Noun>>{ name: 'noun', neuter: true }],
        ["n.indecl.", <Partial<Noun>>{ name: 'noun', neuter: true, indeclinable: true }],
        ["n.pl.", <Partial<Noun>>{ name: 'noun', neuter: true, plural: true }],
        ["n.sg.", <Partial<Noun>>{ name: 'noun', neuter: true, singular: true }],
        ["num.", <Partial<Numeral>>{ name: 'numeral' }],
        ["num.card.", <Partial<Numeral>>{ name: 'numeral', cardinal: true }],
        ["num.coll.", <Partial<Numeral>>{ name: 'numeral', collective: true }],
        ["num.diff.", <Partial<Numeral>>{ name: 'numeral', differential: true }],
        ["num.fract.", <Partial<Numeral>>{ name: 'numeral', fractional: true }],
        ["num.mult.", <Partial<Numeral>>{ name: 'numeral', multiplicative: true }],
        ["num.ord.", <Partial<Numeral>>{ name: 'numeral', ordinal: true }],
        ["num.subst.", <Partial<Numeral>>{ name: 'numeral', substantivized: true }],
        ["particle", <Partial<Particle>>{ name: 'particle' }],
        ["phrase", <Partial<Phrase>>{ name: 'phrase' }],
        ["prefix", <Partial<Prefix>>{ name: 'prefix' }],
        ["prep.", <Partial<Preposition>>{ name: 'preposition' }],
        ["pron.dem.", <Partial<Pronoun>>{ name: 'pronoun', demonstrative: true }],
        ["pron.indef.", <Partial<Pronoun>>{ name: 'pronoun', indefinite: true }],
        ["pron.int.", <Partial<Pronoun>>{ name: 'pronoun', intensive: true }],
        ["pron.pers.", <Partial<Pronoun>>{ name: 'pronoun', personal: true }],
        ["pron.poss.", <Partial<Pronoun>>{ name: 'pronoun', possessive: true }],
        ["pron.rec.", <Partial<Pronoun>>{ name: 'pronoun', reciprocal: true }],
        ["pron.refl.", <Partial<Pronoun>>{ name: 'pronoun', reflexive: true }],
        ["pron.rel.", <Partial<Pronoun>>{ name: 'pronoun', relative: true }],
        ["suffix", <Partial<Suffix>>{ name: 'suffix' }],
        ["v. ipf.", <Partial<Verb>>{ name: 'verb', imperfective: true }],
        ["v.aux. ipf.", <Partial<Verb>>{ name: 'verb', auxiliary: true, imperfective: true }],
        ["v.aux. pf.", <Partial<Verb>>{ name: 'verb', auxiliary: true, perfective: true }],
        ["v.intr. ipf.", <Partial<Verb>>{ name: 'verb', intransitive: true, imperfective: true }],
        ["v.intr. ipf./pf.", <Partial<Verb>>{ name: 'verb', intransitive: true, imperfective: true, perfective: true }],
        ["v.intr. pf.", <Partial<Verb>>{ name: 'verb', intransitive: true, perfective: true }],
        ["v.ipf.", <Partial<Verb>>{ name: 'verb', imperfective: true }],
        ["v.pf.", <Partial<Verb>>{ name: 'verb', perfective: true }],
        ["v.refl. ipf.", <Partial<Verb>>{ name: 'verb', reflexive: true, imperfective: true }],
        ["v.refl. ipf./pf.", <Partial<Verb>>{ name: 'verb', reflexive: true, imperfective: true, perfective: true }],
        ["v.refl. pf.", <Partial<Verb>>{ name: 'verb', reflexive: true, perfective: true }],
        ["v.tr. ipf.", <Partial<Verb>>{ name: 'verb', transitive: true, imperfective: true }],
        ["v.tr. ipf./pf.", <Partial<Verb>>{ name: 'verb', transitive: true, imperfective: true, perfective: true }],
        ["v.tr. pf.", <Partial<Verb>>{ name: 'verb', transitive: true, perfective: true }],
        ["v.tr.ipf", <Partial<Verb>>{ name: 'verb', transitive: true, imperfective: true }],
    ])('should expand %j to object', (abbr: string, expected: Partial<PartOfSpeech>) => {
        const actual = expandPOSAbbreviation(abbr);

        const pattern: any = { ...expected };
        for (const aKey of Object.keys(actual)) {
            const key: keyof PartOfSpeech = aKey as any;
            if (typeof actual[key] === 'boolean' && !(key in pattern)) {
                pattern[key] = false;
            }
        }

        expect(actual).toMatchObject(pattern);
    });

    it('should throw on non-strings', () => {
        expect(() => expandPOSAbbreviation(null as any)).toThrowErrorMatchingSnapshot();
    });

    it('should throw on unknown abbreviations', () => {
        expect(() => expandPOSAbbreviation('unknown')).toThrowErrorMatchingSnapshot();
    });
});
