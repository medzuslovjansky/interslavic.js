import {cartesianProduct} from "../utils/cartesianProduct";
import {SimpleSynset} from "../types/columns/SimpleSynset";
import {Lemma} from "../types/atomic/Lemma";

export function parseSynset(rawStr: string): SimpleSynset | null {
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

  const separator = str.indexOf(';') >= 0 ? ';' : ',';
  const lemmas = str.split(separator).map<Lemma>(part => {
    let value = part.trim();

    let annotation: string | undefined;
    if (annotationsMap.size > 0) {
      value = value.replace(/\s*(ANNOTATION_\d+)/g, function (_0, match) {
        annotation = annotationsMap.get(match);
        return '';
      });
    }

    const result: Lemma = {
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
