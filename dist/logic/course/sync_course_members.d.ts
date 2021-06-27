import type CSCAuth from "../../auth";
/**
 * Sync the members list of the specified course.
 */
export default function SyncCourseMembers(courseId: number, auth: CSCAuth): Promise<import("../../request/client").ParsedResponse<boolean, Error, {
    statusCode: number;
} | null>>;
//# sourceMappingURL=sync_course_members.d.ts.map