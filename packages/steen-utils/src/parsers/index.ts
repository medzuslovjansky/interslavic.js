import {PropertyMapper} from "../types/ParserMappersT1";
import {parseSynset} from "./synset";
import {parsePartOfSpeech} from "./partOfSpeech";
import {SimpleSynset} from "../types/columns/SimpleSynset";
import {PartOfSpeech} from "../types/columns/PartOfSpeech";
import {CrudeFrequency} from "../types/atomic/CrudeFrequency";
import {CrudeIntelligibilityReport} from "../types/columns/CrudeIntelligibilityReport";
import {parseIntelligibility} from "./sameInLanguages";
import {VoteStatus} from "../types/columns/VoteStatus";
import {parseGenesis} from "./genesis";

export const id: PropertyMapper<any, number> = (context) => {
  const result = Number(context.value.trim());
  if (result > 0) {
    return result;
  }

  throw new Error(); // TODO: add error description
};

export const synset: PropertyMapper<any, SimpleSynset | null> = (context) => {
  return parseSynset(context.value);
};

export const sameInLanguages: PropertyMapper<any, CrudeIntelligibilityReport> = (context) => {
  return parseIntelligibility(context.value);
};

export const partOfSpeech: PropertyMapper<any, PartOfSpeech | null> = (context) => {
  const value = context.value;
  if (!value) {
    return null;
  }

  const pos = parsePartOfSpeech(value);
  if (pos === null) {
    throw new Error(); // TODO: add error description
  }

  return pos;
};

export const genesis = parseGenesis;

export const voteStatus: PropertyMapper<any, VoteStatus | null> = (context) => {
  const value = +context.value;
  if (!value) {
    return null;
  }

  switch (value) {
    case VoteStatus.Common:
    case VoteStatus.Regional:
    case VoteStatus.Individual:
    case VoteStatus.Archaic:
    case VoteStatus.Artificial:
    case VoteStatus.Questionable:
    case VoteStatus.Deprecated:
      return value;
    default:
      throw new Error();
  }
};

export const crudeFrequency: PropertyMapper<any, CrudeFrequency | null> = (context) => {
  if (!context.value) {
    return null;
  }

  const value = +context.value;

  switch (value) {
    case CrudeFrequency.Frequent:
    case CrudeFrequency.Regular:
      return value;
    default:
      throw new Error(); // TODO: add error description
  }
};

