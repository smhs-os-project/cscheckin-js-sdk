import CSCAuth from "../../auth";
import { CreateCourseRequest } from "../../types/course/req_course";
/**
 * Create a course.
 *
 * @example
 * ```ts
 * CreateCourse("12345", {
 *   start_timestamp: new Date(),
 *   late_time: "00:10:00",
 *   expire_time: "00:50:00",
 * });
 * ```
 */
export default function CreateCourse(classroomId: string, request: CreateCourseRequest, auth: CSCAuth): Promise<import("../../types/error/std_error").WouldFail<{
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    start_timestamp: Date;
    late_time: string;
    expire_time: string;
    google_classroom_id: string;
    teacher_id: number;
    uuid: string;
}>>;
//# sourceMappingURL=create_course.d.ts.map