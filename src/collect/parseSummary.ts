import {
    coveredBranchesCounter,
    coveredLinesCounter,
    standardCoveredCounter,
    standardTotalCounter,
    totalBranchesCounter,
    totalLinesCounter,
} from './counters';
import { getSummary } from './getSummary';
import { CoverageMap } from '../typings/JsonReport';

export const parseSummary = (jsonReport: CoverageMap) => {
    return [
        getSummary(
            jsonReport,
            standardTotalCounter('s'),
            standardCoveredCounter('s'),
            'Statements'
        ),
        getSummary(
            jsonReport,
            totalBranchesCounter,
            coveredBranchesCounter,
            'Branches'
        ),
        getSummary(
            jsonReport,
            standardTotalCounter('f'),
            standardCoveredCounter('f'),
            'Functions'
        ),
        getSummary(jsonReport, totalLinesCounter, coveredLinesCounter, 'Lines'),
    ];
};
