import type CSCAuth from "../../auth";
import type { CourseResponse, CreateCourseRequest } from "../../types";
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
export default function CreateCourse(classroomId: string, request: CreateCourseRequest, auth: CSCAuth): Promise<CourseResponse>;
//# sourceMappingURL=create_course.d.ts.map