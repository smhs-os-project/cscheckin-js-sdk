import dayjs from "dayjs";
export declare type TimePlus = string;
export declare const timePlusPattern: RegExp;
export declare function isTimePlus(time: string): time is TimePlus;
export declare function getAddedTime(startTimestamp: Date, timePlus: string): dayjs.Dayjs;
export declare function isAfter(startTimestamp: Date, timePlus: string): boolean;
//# sourceMappingURL=is_after.d.ts.map