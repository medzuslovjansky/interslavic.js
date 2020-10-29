import {SlavicLanguage} from "../atomic/SlavicLanguage";
import {CrudeIntelligibilityLevel} from "../atomic/CrudeIntelligibilityLevel";

export type CrudeIntelligibilityReport = Partial<Record<SlavicLanguage, CrudeIntelligibilityLevel>>;
