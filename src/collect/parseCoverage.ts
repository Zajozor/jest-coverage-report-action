import { parseDetails } from './parseDetails';
import { parseSummary } from './parseSummary';
import { CoverageMap } from '../typings/JsonReport';
import { Report } from '../typings/Report';

export const parseCoverage = (jsonReport: CoverageMap): Report => {
    return {
        success: true,
        summary: parseSummary(jsonReport),
        details: parseDetails(jsonReport),
    };
};
