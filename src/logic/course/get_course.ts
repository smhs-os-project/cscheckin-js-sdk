import GetMethod from "../../request/encapsulation/get_method";
import { CourseResponseSchema } from "../../types/course/resp_course";

/**
 * Get the info of specified course.
 */
export default async function GetCourse(courseUUID: string) {
    return GetMethod(`/course/${courseUUID}`, CourseResponseSchema);
}
