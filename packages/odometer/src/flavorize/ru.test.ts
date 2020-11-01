import {russian} from "./index";
import {getCases} from "../db/cases";
import {BareRecord} from "@interslavic/steen-utils";

describe('Russian multirator', () => {
    test.each(
      getCases(0, 1).map(entry => [
        Object.assign(entry, {
          toString(this: BareRecord) {
            return String(this.isv?.options.map(o => o.value));
          }
        }),
      ])
    )('should convert %s', (entry: BareRecord) => {
        const result = russian.process(entry);
        expect(result.map(l => l.value).join('; ')).toMatchSnapshot('value');
        expect(result.map(l => l.appliedRules.join(',')).join('\n')).toMatchSnapshot('rules');
    });
});
