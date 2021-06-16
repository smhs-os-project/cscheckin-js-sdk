/**
 * Get the info of specified course.
 */
export default function GetCourse(courseUUID: string): Promise<import("../../types/error/std_error").WouldFail<{
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
}>>;
//# sourceMappingURL=get_course.d.ts.map