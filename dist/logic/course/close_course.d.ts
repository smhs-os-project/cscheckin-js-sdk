import type CSCAuth from "../../auth";
/**
 * Close a course.
 */
export default function CloseCourse(courseId: number, auth: CSCAuth): Promise<import("../../request/client").ParsedResponse<boolean, Error, {
    statusCode: number;
} | null>>;
//# sourceMappingURL=close_course.d.ts.map