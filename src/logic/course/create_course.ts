import type CSCAuth from "../../auth";
import PostAuthMethod from "../../request/encapsulation/post_auth_method";
import type { CreateCourseRequest } from "../../types/course/req_course";
import { CourseResponseSchema } from "../../types/course/resp_course";

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
export default async function CreateCourse(
  classroomId: string,
  request: CreateCourseRequest,
  auth: CSCAuth
) {
  return PostAuthMethod(
    `/course/${classroomId}`,
    request,
    auth,
    CourseResponseSchema
  );
}
