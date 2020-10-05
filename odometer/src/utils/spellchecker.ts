import { Nodehun } from 'nodehun'
import fs from 'fs';
import path from 'path';

let _instance: Nodehun | undefined;

function spellchecker(): Nodehun {
    if (!_instance) {
        const affPath = path.join(process.cwd(), 'hunspell/ru_RU_no-inflections.aff')
        const dicPath = path.join(process.cwd(), 'hunspell/ru_RU_no-inflections.dic')
        const affix       = fs.readFileSync(affPath);
        const dictionary  = fs.readFileSync(dicPath);

        _instance = new Nodehun(affix, dictionary)
    }

    return _instance;
}

export async function russianCheck(variants: string[]): Promise<string[]> {
    const spellcheckerResults = await Promise.all(variants.map(variant => {
        return spellchecker().spell(variant).then(ok => ok && variant || null);
    }));

    const uniques = new Set<string>();
    for (const variant of spellcheckerResults) {
        if (variant) {
            uniques.add(variant);
        }
    }

    if (uniques.size === 0) {
        const suggestionBatches = await Promise.all(variants.map(variant => spellchecker().suggest(variant)));

        for (const batch of suggestionBatches) {
            if (batch) {
                for (const variant of batch) {
                    uniques.add(variant);
                }
            }
        }
    }

    return [...uniques];
}
