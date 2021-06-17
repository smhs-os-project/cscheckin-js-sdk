import GetMethod from "../../request/encapsulation/get_method";
import { CourseResponseSchema } from "../../types/course/resp_course";

/**
 * Get the info of the specified UUID of course.
 */
export async function GetCourseByUUID(courseUUID: string) {
    return GetMethod(`/course/${courseUUID}`, CourseResponseSchema);
}

/**
 * Get the info of the specified ID of course.
 */
 export async function GetCourseByID(courseId: number) {
    return GetMethod(`/course/${courseId}`, CourseResponseSchema);
}
