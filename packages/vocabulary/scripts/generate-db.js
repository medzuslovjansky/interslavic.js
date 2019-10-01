
const dictionary = Object.values(require('../external/steen-en'));

function main() {
  console.log(JSON.stringify([...steenDeserializeAll()], null, 4));
}

function* steenDeserializeAll() {
  for (const word of dictionary) {
    yield* steenDeserialize(word);
  }
}

function* steenDeserialize(entry) {
    const [commaWords, commaIrregularities, morphology, category, commaTranslations, intelligibility, etymology] = entry.split('\t');
    const words = commaWords.split(/,\s*/);
    const translations = commaTranslations.split(/,\s*/);
    const irregularities = deserializeIrregularities(commaIrregularities);

    for (const value of words) {
        yield {
          ...irregularities,
          value,
          morphology,
          category,
          translations,
          intelligibility,
          etymology
        };
    }
}

function deserializeIrregularities(serialized) {
    if (!serialized.endsWith(')')) {
        return {};
    }

    if (serialized.startsWith('(+')) {
        return { useCase: Number(serialized.slice(2, -1)) };
    }

    return { forms: serialized.slice(1, -1).split(',') };
}

main();
