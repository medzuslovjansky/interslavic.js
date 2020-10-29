import {CrudeIntelligibilityReport} from "../types/columns/CrudeIntelligibilityReport";
import {CrudeIntelligibilityLevel} from "../types/atomic/CrudeIntelligibilityLevel";
import {SlavicLanguage} from "../types/atomic/SlavicLanguage";

const BEFORE_PARENTHESES = /^([^(]*)/;
const OPEN_PARENTHESES = /\(([^)]+)\)/;

export function parseIntelligibility(encoded: string): CrudeIntelligibilityReport {
  const [, beforeParentheses] = BEFORE_PARENTHESES.exec(encoded) || [];
  const [, parenthesizedPart] = OPEN_PARENTHESES.exec(encoded) || [];

  return {
    ...parseIntellgibilityFragment(beforeParentheses),
    ...parseIntellgibilityFragment(parenthesizedPart, CrudeIntelligibilityLevel.Other1),
  };
}

function parseIntellgibilityFragment(encoded: string, override?: CrudeIntelligibilityLevel): CrudeIntelligibilityReport {
  const result = {};
  if (!encoded) {
    return result;
  }

  const tokens = encoded.split(/\s+/);
  for (const token of tokens) {
    const stripped = token.replace(/[^a-z]/g, '');
    const symbols = token.replace(/[a-z]/g, '');

    const report = override
      ? expandRegionalTag(stripped, override)
      : expandRegionalToken(stripped, symbols);

    Object.assign(result, report);
  }

  return result;
}

function expandRegionalToken(tag: string, encodedIntelligibility: string): CrudeIntelligibilityReport {
  switch (encodedIntelligibility) {
    case '~': return expandRegionalTag(tag, CrudeIntelligibilityLevel.Incomplete);
    case '#': return expandRegionalTag(tag, CrudeIntelligibilityLevel.Disputed);
    case '': return expandRegionalTag(tag, CrudeIntelligibilityLevel.Full);
    default: return expandRegionalTag(tag, CrudeIntelligibilityLevel.Unknown);
  }
}

function expandRegionalTag(tag: string, intelligibility: CrudeIntelligibilityLevel): CrudeIntelligibilityReport {
  const L = SlavicLanguage;

  switch (tag) {
    case 'v': // Eastern Slavic langauges
      return reportFragment(
        intelligibility,
        L.Russian,
        L.Belarusian,
        L.Ukrainian,
        L.Rusyn,
        L.ChurchSlavonic,
        L.OldRussian,
      );
    case 'ru':
      return reportFragment(intelligibility, L.Russian);
    case 'be':
      return reportFragment(intelligibility, L.Belarusian);
    case 'uk':
      return reportFragment(intelligibility, L.Ukrainian);
    case 'rue':
      return reportFragment(intelligibility, L.Rusyn);
    case 'cu':
      return reportFragment(intelligibility, L.ChurchSlavonic);
    case 'ub':
      return reportFragment(intelligibility, L.Ukrainian, L.Belarusian);

    case 'z': // Western Slavic languages
      return reportFragment(
        intelligibility,
        L.Polish,
        L.Slovak,
        L.Czech,
        L.Polabian,
        L.Kashubian,
        L.LowerSilesian,
        L.UpperSorbian,
        L.LowerSorbian,
      );
    case 'pl':
      return reportFragment(intelligibility, L.Polish);
    case 'sk':
      return reportFragment(intelligibility, L.Slovak);
    case 'cz':
      return reportFragment(intelligibility, L.Czech);
    case 'cs':
      return reportFragment(intelligibility, L.Czech, L.Slovak);
    case 'csb':
      return reportFragment(intelligibility, L.Kashubian);
    case 'dsb':
      return reportFragment(intelligibility, L.LowerSorbian);
    case 'hsb':
      return reportFragment(intelligibility, L.UpperSorbian);
    case 'sb':
      return reportFragment(intelligibility, L.LowerSorbian, L.UpperSorbian);

    case 'j': // Southern Slavic Languages
      return reportFragment(
        intelligibility,
        L.Bulgarian,
        L.Macedonian,
        L.Bosnian,
        L.Croatian,
        L.Montenegrin,
        L.Serbian,
        L.Slovenian,
      );
    case 'bg':
      return reportFragment(intelligibility, L.Bulgarian);
    case 'mk':
      return reportFragment(intelligibility, L.Macedonian);
    case 'sr':
      return reportFragment(intelligibility, L.Serbian);
    case 'hr':
      return reportFragment(intelligibility, L.Croatian);
    case 'sl':
      return reportFragment(intelligibility, L.Slovenian);
    case 'bm':
      return reportFragment(intelligibility, L.Bulgarian, L.Macedonian);
    case 'yu':
      return reportFragment(intelligibility, L.Slovenian, L.Croatian, L.Serbian, L.Bosnian, L.Montenegrin);
    case 'sh':
      return reportFragment(intelligibility, L.Serbian, L.Croatian, L.Bosnian, L.Montenegrin);

    case 'ps': // Praslovjansky
      return reportFragment(intelligibility,
        L.Polish,
        L.Slovak,
        L.Czech,
        L.Polabian,
        L.Kashubian,
        L.LowerSilesian,
        L.UpperSorbian,
        L.LowerSorbian,
        L.Bulgarian,
        L.Macedonian,
        L.Bosnian,
        L.Croatian,
        L.Serbian,
        L.Slovenian,
        L.Russian,
        L.Belarusian,
        L.Ukrainian,
        L.Rusyn,
        L.ChurchSlavonic,
        L.OldRussian,
      );
    default:
      // Slovio, Novoslovienskij, Slovioski, ...
      // 'sx', 'n', 'ns', 'i', 'ij', 'in', 'iw', 'iz', 'jc', 'jn', 're'
      return reportFragment(intelligibility);
  }
}

function reportFragment(value: CrudeIntelligibilityLevel, ...langs: SlavicLanguage[]): CrudeIntelligibilityReport {
  const result: CrudeIntelligibilityReport = {};

  for (const lang of langs) {
    result[lang] = value;
  }

  return result;
}
