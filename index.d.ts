
declare module 'split-interval' {
    export type SplitInterval = (startDate: Date, endDate: Date, startTime: string, endTime: string) => SplitIntervalResult[];
    export type SplitIntervalResult = { start: Date, end: Date; };
    const splitInterval: SplitInterval;
    export default splitInterval;
}
