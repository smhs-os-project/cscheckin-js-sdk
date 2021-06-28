import type CSCAuth from "../../auth";
/**
 * Get the info of the specified UUID of course.
 */
export declare function GetCourseByUUID(courseUUID: string): Promise<{
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
}>;
/**
 * Get the info of the specified ID of course.
 */
export declare function GetCourseByID(courseId: number, auth: CSCAuth): Promise<{
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
}>;
//# sourceMappingURL=get_course.d.ts.map