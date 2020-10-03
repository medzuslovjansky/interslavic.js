export type MultiratorRule = [RegExp, string[]];

export class Multirator {
    private readonly rules: MultiratorRule[] = [];

    add(search: RegExp, replacements: string[]) {
        this.rules.push([new RegExp(search, 'i'), replacements]);
        return this;
    }

    convert(str: string): string[] {
        const variants = this.rules.reduce(function (variants: Set<string>, rule: MultiratorRule) {
            const [search, replacements] = rule;
            const results = new Set<string>();

            for (const str of variants) {
                for (const replacement of replacements) {
                    const intermediates = new Set([str]);
                    let newString = str;
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

        return [...variants];
    }
}
