import {MultiratorRule} from "./MultiratorRule";
import {PartOfSpeech} from "@interslavic/steen-utils";

export class RuntimeMultiratorRule implements MultiratorRule {
  readonly id;
  readonly match;
  readonly partOfSpeech;
  readonly replaceWith;
  readonly applies: (pos?: PartOfSpeech) => boolean;

  constructor(rule: MultiratorRule) {
    this.id = rule.id;
    this.match = rule.match;
    this.partOfSpeech = rule.partOfSpeech;
    this.replaceWith = rule.replaceWith;

    const shape = rule.partOfSpeech;
    const shapeKeys = Object.keys(shape).filter(isDefinedInThis, shape) as (keyof PartOfSpeech)[];

    if (shapeKeys.length === 0) {
      this.applies = () => true;
    } else {
      this.applies = (pos?: PartOfSpeech): boolean => {
        if (!pos) {
          return false;
        }

        for (const key of shapeKeys) {
          if (shape[key] !== pos[key]) {
            return false;
          }
        }

        return true;
      };
    }
  }
}

function isDefinedInThis(this: any, key: string) {
  return this[key] !== undefined;
}
