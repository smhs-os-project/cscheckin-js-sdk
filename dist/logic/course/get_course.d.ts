import type CSCAuth from "../../auth";
import type { CourseResponse } from "../../types";
/**
 * Get the info of the specified UUID of course.
 */
export declare function GetCourseByUUID(courseUUID: string): Promise<CourseResponse>;
/**
 * Get the info of the specified ID of course.
 */
export declare function GetCourseByID(courseId: number, auth: CSCAuth): Promise<CourseResponse>;
//# sourceMappingURL=get_course.d.ts.map