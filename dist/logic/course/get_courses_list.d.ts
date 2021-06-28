import type CSCAuth from "../../auth";
/**
 * Get the available courses.
 */
export default function GetCoursesList(auth: CSCAuth): Promise<{
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
}[]>;
//# sourceMappingURL=get_courses_list.d.ts.map