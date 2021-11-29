import { CoverageDetailsMap, CoverageSummary } from './Coverage';

export enum FailReason {
    TESTS_FAILED = 'testsFailed',
    INVALID_COVERAGE_FORMAT = 'invalidFormat',
    UNDER_THRESHOLD = 'underThreshold',
    NO_REPORT_PRESENT = 'noReportPresent',
    UNKNOWN_ERROR = 'unknownError',
}

export type Report = {
    success: boolean;
    summary?: Array<CoverageSummary>;
    details?: CoverageDetailsMap;
    failReason?: FailReason;
    error?: Error;
};
