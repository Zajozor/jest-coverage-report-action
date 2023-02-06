import { getRawCoverage } from './getRawCoverage';
import { parseCoverage } from './parseCoverage';
import { parseJsonReport } from './parseJsonReport';
import { CoverageMap } from '../typings/JsonReport';
import { PackageManagerType, SkipStepType } from '../typings/Options';
import { Report } from '../typings/Report';

export const collectCoverage = async (
    testCommand: string,
    packageManager: PackageManagerType,
    skipStep: SkipStepType,
    branch?: string,
    workingDirectory?: string
): Promise<[Report, CoverageMap] | undefined> => {
    const source = await getRawCoverage(
        testCommand,
        packageManager,
        skipStep,
        branch,
        workingDirectory
    );

    if (typeof source !== 'string') {
        return undefined;
    }
    const jsonReport = parseJsonReport(source);

    if (jsonReport.success === false) {
        return undefined;
    }

    return [
        parseCoverage(jsonReport as CoverageMap),
        jsonReport as CoverageMap,
    ];
};
