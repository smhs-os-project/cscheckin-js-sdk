import CSCAuth from "../../auth";
/**
 * Get the available courses.
 */
export default function GetCoursesList(auth: CSCAuth): Promise<import("../../types/error/std_error").WouldFail<{
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    google_classroom_id: string;
    teacher_id: number;
    start_timestamp: Date;
    late_time: string;
    expire_time: string;
    uuid: string;
}[]>>;
//# sourceMappingURL=get_courses_list.d.ts.map