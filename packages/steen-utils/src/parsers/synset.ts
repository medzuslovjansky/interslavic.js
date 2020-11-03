import {cartesianProduct} from "../utils/cartesianProduct";
import {SimpleSynset} from "../types/columns/SimpleSynset";
import {Lemma} from "../types/atomic/Lemma";
import {PropertyMapper} from "../types/ParserMappersT1";
import {PartOfSpeech} from "../types";
import {flatten2} from "../utils/flatten2";

type MaybeNully<T> = T | null | undefined;

type HasPartOfSpeech = {
  partOfSpeech: MaybeNully<PartOfSpeech>;
  [key: string]: any;
};

type GroupItem = {
  index?: number;
  value: string;
};

export const parseSynset: PropertyMapper<HasPartOfSpeech, SimpleSynset | null> = (entry) => {
  const rawStr = entry.value;
  const annotationsMap = new Map<string, string>();
  const meta = {
    autotranslated: isAutotranslated(rawStr),
    debatable: isDebatable(rawStr),
  };

  let str = stripMetacharacters(rawStr).trim();
  if (!str) {
    return null;
  }

  if (str.indexOf('(') >= 0) {
    let index = 0;
    str = str.replace(/\((\(*(?:[^)(]*|\([^)]*\))*\)*)\)/g, (_0, match)  => {
      const key = `ANNOTATION_${index++}`;
      annotationsMap.set(key, match);
      return key;
    });
  }

  const lemmas = smartSplit(str, entry.record.partOfSpeech).map<Lemma>((item) => {
    let value = item.value.trim();

    let annotation: string | undefined;
    if (annotationsMap.size > 0) {
      value = value.replace(/\s*(ANNOTATION_\d+)/g, function (_0, match) {
        annotation = annotationsMap.get(match);
        return '';
      });
    }

    const result: Lemma = {
      ...item,
      value: value.trim(),
    };

    if (annotation) {
      result.annotation = annotation;
    }

    return result;
  });

  return {
    meta,
    options: lemmas.reduce<Lemma[]>((acc, lemma) => {
      const slashIndex = lemma.value.indexOf('/');
      if (slashIndex === -1) {
        return acc.concat(lemma);
      }

      const rawWords = lemma.value
        .replace(/\s*\/\s*/g, '\/')
        .split(' ');

      const product = cartesianProduct(rawWords.map(w => w.split('/')));

      return acc.concat(product.map(words => ({
        ...lemma,
        value: words.join(' '),
      })));
    }, [])
  };
}

function isAutotranslated(str: string) {
  const exclamationIndex = str.indexOf('!');
  if (exclamationIndex === 0) {
    return true;
  }

  if (exclamationIndex === 1) {
    return str.startsWith('#');
  }

  return false;
}

function isDebatable(str: string) {
  const hashIndex = str.indexOf('#');
  if (hashIndex === 0) {
    return true;
  }

  if (hashIndex === 1) {
    return str.startsWith('!');
  }

  return false;
}

function stripMetacharacters(str: string) {
  const hashIndex = str.indexOf('#');
  const exclamationIndex = str.indexOf('!');

  const hasBoth =
    (hashIndex === 0 && exclamationIndex === 1) ||
    (hashIndex === 1 && exclamationIndex === 0);

  if (hasBoth) {
    return str.slice(2);
  }

  if (hashIndex === 0 || exclamationIndex === 0) {
    return str.slice(1);
  }

  return str;
}

function smartSplit(value: string, partOfSpeech: MaybeNully<PartOfSpeech>): GroupItem[] {
  const hasSemicolon = value.indexOf(';') >= 0;
  const hasComma = value.indexOf(',') >= 0;
  const isPhrase = partOfSpeech?.name === 'phrase';

  if (isPhrase) {
    return value.split(';').map(toValue);
  }

  if (hasSemicolon && hasComma) {
    return flatten2(value.split(';').map(semiColonGroupSplit));
  }

  return value.split(hasComma ? ',' : ';').map(toValue);
}

function semiColonGroupSplit(words: string, index: number): GroupItem[] {
  const result: GroupItem[] = [];
  for (const value of words.split(',')) {
    result.push(({value, index}));
  }

  return result;
}

function toValue(value: string): GroupItem {
  return { value };
}
