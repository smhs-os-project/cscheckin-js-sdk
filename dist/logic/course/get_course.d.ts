import type CSCAuth from "../../auth";
/**
 * Get the info of the specified UUID of course.
 */
export declare function GetCourseByUUID(courseUUID: string): Promise<import("../../request/client").ParsedResponse<{
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    start_timestamp: Date;
    late_time: string;
    expire_time: string;
    google_classroom_id: string;
    teacher_id: number;
    uuid: string;
}, {
    error?: string | undefined;
    message?: string | undefined;
}, null>>;
/**
 * Get the info of the specified ID of course.
 */
export declare function GetCourseByID(courseId: number, auth: CSCAuth): Promise<import("../../request/client").ParsedResponse<{
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    start_timestamp: Date;
    late_time: string;
    expire_time: string;
    google_classroom_id: string;
    teacher_id: number;
    uuid: string;
}, {
    error?: string | undefined;
    message?: string | undefined;
}, null>>;
//# sourceMappingURL=get_course.d.ts.map