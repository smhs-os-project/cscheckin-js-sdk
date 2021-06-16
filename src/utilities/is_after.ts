import dayjs from "dayjs";

export type TimePlus = string;

export function isTimePlus(time: string): time is TimePlus {
    return !!(/^\d\d:\d\d:\d\d$/.exec(time));
}

export function getAddedTime(startTimestamp: Date, timePlus: string): dayjs.Dayjs {
    if (isTimePlus(timePlus)) {
        const [hh, mm, ss] = timePlus.split(":").map(Number);
        if (hh !== undefined && mm !== undefined && ss !== undefined) {
            const lateTime = dayjs(startTimestamp).add(hh, "hour").add(mm, "minute").add(ss, "second");
            return lateTime;
        }
    }

    throw new Error(`${timePlus} is in an invalid format.`);
}

export function isAfter(startTimestamp: Date, timePlus: string): boolean {
    return getAddedTime(startTimestamp, timePlus).isAfter(Date.now());
}
