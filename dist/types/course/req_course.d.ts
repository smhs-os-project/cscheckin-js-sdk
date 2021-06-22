import type { Infer } from "myzod";
export declare const CreateCourseRequestSchema: import("myzod/libs/types").ObjectType<{
    start_timestamp: import("myzod/libs/types").DateType;
    /**
     * Set students checking in after "hh:mm:ss" to "late".
     */
    late_time: import("myzod/libs/types").StringType;
    /**
     * Expire the course after "hh:mm:ss"
     */
    expire_time: import("myzod/libs/types").StringType;
}>;
export declare type CreateCourseRequest = Infer<typeof CreateCourseRequestSchema>;
//# sourceMappingURL=req_course.d.ts.map