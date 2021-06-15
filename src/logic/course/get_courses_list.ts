import CSCAuth from "../../auth";
import GetAuthMethod from "../../request/encapsulation/get_auth_method";
import { CourseListResponseSchema } from "../../types/course/resp_course";

/**
 * Get the available courses.
 */
export default function GetCoursesList(auth: CSCAuth) {
    return GetAuthMethod(`/course`, auth, CourseListResponseSchema);
}
