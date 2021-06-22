import type CSCAuth from "../../auth";
import GetMethod from "../../request/encapsulation/get_method";
import GetAuthMethod from "../../request/encapsulation/get_auth_method";
import { CourseResponseSchema } from "../../types/course/resp_course";

/**
 * Get the info of the specified UUID of course.
 */
export async function GetCourseByUUID(courseUUID: string) {
  return GetMethod(`/course/uuid/${courseUUID}`, CourseResponseSchema);
}

/**
 * Get the info of the specified ID of course.
 */
export async function GetCourseByID(courseId: number, auth: CSCAuth) {
  return GetAuthMethod(`/course/id/${courseId}`, auth, CourseResponseSchema);
}
