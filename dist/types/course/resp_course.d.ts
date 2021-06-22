import type { Infer } from "myzod";
export declare const CourseResponseSchema: import("myzod/libs/types").ObjectType<{
    id: import("myzod/libs/types").NumberType;
    google_classroom_id: import("myzod/libs/types").StringType;
    name: import("myzod/libs/types").StringType;
    teacher_id: import("myzod/libs/types").NumberType;
    start_timestamp: import("myzod/libs/types").DateType;
    late_time: import("myzod/libs/types").StringType;
    expire_time: import("myzod/libs/types").StringType;
    uuid: import("myzod/libs/types").StringType;
    created_at: import("myzod/libs/types").StringType;
    updated_at: import("myzod/libs/types").StringType;
}>;
export declare const CourseListResponseSchema: import("myzod/libs/types").ArrayType<import("myzod/libs/types").ObjectType<{
    id: import("myzod/libs/types").NumberType;
    google_classroom_id: import("myzod/libs/types").StringType;
    name: import("myzod/libs/types").StringType;
    teacher_id: import("myzod/libs/types").NumberType;
    start_timestamp: import("myzod/libs/types").DateType;
    late_time: import("myzod/libs/types").StringType;
    expire_time: import("myzod/libs/types").StringType;
    uuid: import("myzod/libs/types").StringType;
    created_at: import("myzod/libs/types").StringType;
    updated_at: import("myzod/libs/types").StringType;
}>>;
export declare type CourseResponse = Infer<typeof CourseResponseSchema>;
export declare type CourseListResponse = Infer<typeof CourseListResponseSchema>;
//# sourceMappingURL=resp_course.d.ts.map