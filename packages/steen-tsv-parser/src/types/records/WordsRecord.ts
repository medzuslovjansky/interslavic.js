import {SimpleSynset} from "../columns/SimpleSynset";
import {PartOfSpeech} from "../columns/PartOfSpeech";
import {VoteStatus} from "../columns/VoteStatus";
import {CrudeIntelligibilityReport} from "../columns/CrudeIntelligibilityReport";
import {Genesis} from "../columns/Genesis";
import {CrudeFrequency} from "../atomic/CrudeFrequency";

export type WordsRecord = {
    id: number;
    isv: SimpleSynset | null;
    addition: string;
    partOfSpeech: PartOfSpeech | null;
    type: VoteStatus | null;
    en: SimpleSynset | null;
    sameInLanguages: CrudeIntelligibilityReport;
    genesis: Genesis | null;
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
    cu: SimpleSynset | null;
    de: SimpleSynset | null;
    nl: SimpleSynset | null;
    eo: SimpleSynset | null;
    frequency: CrudeFrequency | null;
    using_example?: string;
};
