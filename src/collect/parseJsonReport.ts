import { CoverageMap } from '../typings/JsonReport';
import { FailReason } from '../typings/Report';

export const parseJsonReport = (source: string) => {
    try {
        const jsonReport: CoverageMap = JSON.parse(source);

        return jsonReport;
    } catch (err) {
        return {
            success: false,
            error: err as Error,
            failReason: FailReason.INVALID_COVERAGE_FORMAT,
        };
    }
};
