import {BareRecord, PartOfSpeech} from "@interslavic/steen-utils";
import {RuntimeMultiratorRule} from "./RuntimeMultiratorRule";
import {MultiratorRule} from "./MultiratorRule";

export type PartOfSpeechPredicate = Partial<PartOfSpeech>;
export type Replacer = (substring: string, ...args: any[]) => string;
export type Replacement = string | Replacer;

export type ProcessedLemma = {
  value: string;
  appliedRules: string[];
};

export class Multirator {
  protected readonly rules: RuntimeMultiratorRule[] = [];
  protected readonly ruleIDs = new Set<string>();

  constructor(rules: MultiratorRule[] = []) {
    this.add(...rules);
  }

  public add(...rules: MultiratorRule[]) {
    for (const rule of rules) {
      this.validateRule(rule);
      this.ruleIDs.add(rule.id);
      this.rules.push(new RuntimeMultiratorRule(rule));
    }
  }

  protected validateRule(rule: MultiratorRule) {
    if (!rule.id) {
      throw new Error(`Replacement rule (${rule.match}) should have a defined id`);
    }

    if (this.ruleIDs.has(rule.id)) {
      throw new Error(`Replacement rule (${rule.match}) has a non-unique ID = ${rule.id}`);
    }
  }

  public process(record: BareRecord): ProcessedLemma[] {
    if (!record.isv) {
      return [];
    }

    let uniqueResults = new Set<string>();
    for (const option of record.isv.options) {
      uniqueResults.add(option.value);
    }

    const triggers = new Map<string, string[]>();

    for (const rule of this.rules) {
      if (!rule.applies(record)) {
        continue;
      }

      const finalReplacements = new Set<string>();
      for (const sourceString of uniqueResults) {
        for (const replacement of rule.replaceWith) {
          let processedString = sourceString;

          const intermediates = new Set<string>([]);
          do {
            intermediates.add(processedString);
            // @ts-ignore
            processedString = processedString.replace(rule.match, replacement);
          } while (!intermediates.has(processedString) && intermediates.size < 50);

          if (intermediates.size >= 50) {
            throw new Error(`Infinite loop detected for the rule ${JSON.stringify(rule.id)} on record ${record.id}`);
          }

          finalReplacements.add(processedString);

          const replaceCount = intermediates.size - 1;
          if (!triggers.has(processedString)) {
            const ruleMarker = rule.replaceWith.length > 1
              ? `${rule.id}:${rule.replaceWith.indexOf(replacement) + 1}`
              : rule.id;

            const appliedRules: string[] = triggers.get(sourceString) || [];
            for (let i = 0; i < replaceCount; i++) {
              appliedRules.push(ruleMarker);
            }
            triggers.set(processedString, appliedRules);
          }
        }
      }
      uniqueResults = finalReplacements;
    }

    const result: ProcessedLemma[] = [];
    for (const value of uniqueResults) {
      result.push({
        value,
        appliedRules: triggers.get(value) || [],
      });
    }

    return result;
  }
}
