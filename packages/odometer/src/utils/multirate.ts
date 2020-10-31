export type PartOfSpeechPredicate = (pos: string) => boolean;
export type MultiratorRule = [PartOfSpeechPredicate, RegExp, string[]];

const isAny = () => true;
const isVerb = (pos: string) => pos.startsWith('v.');
const isAdjective = (pos: string) => pos.startsWith('adj.');

export class Multirator {
    private readonly rules: MultiratorRule[] = [];

    public all(search: RegExp, replacements: string[]) {
        return this.custom(isAny, search, replacements);
    }

    public verb(search: RegExp, replacements: string[]) {
        return this.custom(isVerb, search, replacements);
    }

    public adjective(search: RegExp, replacements: string[]) {
        return this.custom(isAdjective, search, replacements);
    }

    protected custom(predicate: PartOfSpeechPredicate, search: RegExp, replacements: string[]) {
        this.rules.push([predicate, new RegExp(search, 'i'), replacements]);
        return this;
    }

    convert(str: string, pos?: string): string[] {
        const resultingVariants = this.rules.reduce(function (variants: Set<string>, rule: MultiratorRule) {
            const [predicate, search, replacements] = rule;
            if (pos && !predicate(pos)) {
                return variants;
            }

            const results = new Set<string>();

            for (const variantStr of variants) {
                for (const replacement of replacements) {
                    const intermediates = new Set([variantStr]);
                    let newString = variantStr;
                    do {
                        newString = newString.replace(search, replacement);
                        if (intermediates.has(newString)) {
                            results.add(newString);
                            break;
                        } else {
                            intermediates.add(newString);
                        }
                    } while (true);
                }
            }

            return results;
        }, new Set<string>([str]))

        return [...resultingVariants];
    }
}
