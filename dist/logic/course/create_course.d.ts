import type CSCAuth from "../../auth";
import type { CreateCourseRequest } from "../../types";
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
export default function CreateCourse(classroomId: string, request: CreateCourseRequest, auth: CSCAuth): Promise<import("../../request/client").ParsedResponse<{
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
}, {
    error?: string | undefined;
    message?: string | undefined;
}, null>>;
//# sourceMappingURL=create_course.d.ts.map