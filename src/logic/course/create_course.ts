import CSCAuth from "../../auth";

export interface TimeDiff {
    minutes: number;
}

/**
 * Create a course.
 */
export default function CreateCourse(classroomId: string, start: Date, late: TimeDiff, end: TimeDiff) {
    throw new Error("not implemented");
}
