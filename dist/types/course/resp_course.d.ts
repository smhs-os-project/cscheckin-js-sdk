import type { Infer } from "myzod";
export declare const CourseResponseSchema: import("myzod").ObjectType<{
    id: import("myzod").NumberType;
    google_classroom_id: import("myzod").StringType;
    name: import("myzod").StringType;
    teacher_id: import("myzod").NumberType;
    start_timestamp: import("myzod").DateType;
    late_time: import("myzod").StringType;
    expire_time: import("myzod").StringType;
    uuid: import("myzod").StringType;
    created_at: import("myzod").StringType;
    updated_at: import("myzod").StringType;
}>;
export declare const CourseListResponseSchema: import("myzod").ArrayType<import("myzod").ObjectType<{
    id: import("myzod").NumberType;
    google_classroom_id: import("myzod").StringType;
    name: import("myzod").StringType;
    teacher_id: import("myzod").NumberType;
    start_timestamp: import("myzod").DateType;
    late_time: import("myzod").StringType;
    expire_time: import("myzod").StringType;
    uuid: import("myzod").StringType;
    created_at: import("myzod").StringType;
    updated_at: import("myzod").StringType;
}>>;
export declare type CourseResponse = Infer<typeof CourseResponseSchema>;
export declare type CourseListResponse = Infer<typeof CourseListResponseSchema>;
//# sourceMappingURL=resp_course.d.ts.map