import {PropertyMapper} from "../types/ParserMappersT1";
import {Genesis} from "../types";

export const parseGenesis: PropertyMapper<any, Genesis | null> = (context) => {
  const value = context.value.toUpperCase();
  if (!value) {
    return null;
  }

  switch (value) {
    case Genesis.Arabic:
    case Genesis.Deutsch:
    case Genesis.English:
    case Genesis.French:
    case Genesis.German:
    case Genesis.International:
    case Genesis.Netherlands:
    case Genesis.Oriental:
    case Genesis.Slavic:
    case Genesis.Turkic:
    case Genesis.Artificial:
      return value;
    default:
      throw new Error();
  }
};
