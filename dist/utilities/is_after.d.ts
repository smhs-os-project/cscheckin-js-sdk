import dayjs from "dayjs";
export declare type TimeOffset = string;
export declare const timeOffsetPattern: RegExp;
/**
 * Is it the TimeOffset pattern.
 *
 * @example ```ts
 * isTimeOffset("00:10:00") // true
 * isTimeOffset("0:0:0") // false
 * isTimeOffset("1:13:15") // false
 * isTimeOffset("01:13:15") // true
 * ```
 */
export declare function isTimeOffset(time: string): time is TimeOffset;
/**
 * Get the Dayjs date object of (startTimestamp + TimePlus)
 *
 * @param startTimestamp The start time.
 * @param offset The offset to added.
 */
export declare function getAddedTime(startTimestamp: Date, offset: string): dayjs.Dayjs;
/**
 * Is the specified time in the future?
 *
 * Formula: `(startTimestamp + timePlus) > Date.now()`
 *
 * @see getAddedTime
 */
export declare function isAfter(startTimestamp: Date, timePlus: string): boolean;
/**
 * Is the specified time in the past?
 *
 * Formula: `(startTimestamp + timePlus) < Date.now()`
 *
 * @see getAddedTime
 */
export declare function isBefore(startTimestamp: Date, timePlus: string): boolean;
//# sourceMappingURL=is_after.d.ts.map