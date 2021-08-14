import dayjs from "dayjs";
import InvalidTimeOffset from "../types/error/invalid_time_offset";

export type TimeOffset = string;
export const timeOffsetPattern = /^\d\d:\d\d:\d\d$/;

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
export function isTimeOffset(time: string): time is TimeOffset {
  return !!timeOffsetPattern.exec(time);
}

/**
 * Get the Dayjs date object of (startTimestamp + TimePlus)
 *
 * @param startTimestamp The start time.
 * @param offset The offset to added.
 */
export function getAddedTime(
  startTimestamp: Date,
  offset: string
): dayjs.Dayjs {
  if (isTimeOffset(offset)) {
    const [hh, mm, ss] = offset.split(":").map(Number);
    if (hh !== undefined && mm !== undefined && ss !== undefined) {
      return dayjs(startTimestamp)
        .add(hh, "hour")
        .add(mm, "minute")
        .add(ss, "second");
    }
  }

  throw new InvalidTimeOffset(offset);
}

/**
 * Is the specified time in the future?
 *
 * Formula: `(startTimestamp + timePlus) > Date.now()`
 *
 * @see getAddedTime
 */
export function isAfter(startTimestamp: Date, timePlus: string): boolean {
  return getAddedTime(startTimestamp, timePlus).isAfter(Date.now());
}

/**
 * Is the specified time in the past?
 *
 * Formula: `(startTimestamp + timePlus) < Date.now()`
 *
 * @see getAddedTime
 */
export function isBefore(startTimestamp: Date, timePlus: string): boolean {
  return getAddedTime(startTimestamp, timePlus).isBefore(Date.now());
}
