import CSCAuth from "../../auth";
import GetAuthMethod from "../../request/encapsulation/get_auth_method";
import { CourseResponseSchema } from "../../types/course/resp_course";

/**
 * Get the info of specified course.
 */
export default async function GetCourse(courseUUID: string, auth: CSCAuth) {
    return GetAuthMethod(`/course/${courseUUID}`, auth, CourseResponseSchema);
}
