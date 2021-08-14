import type { Infer } from "myzod";
/**
 * The schema of the request of `CreateCourse()`.
 */
export declare const CreateCourseRequestSchema: import("myzod").ObjectType<{
    /**
     * When does the course start?
     *
     * Should be a `Date()` object.
     */
    start_timestamp: import("myzod").DateType;
    /**
     * How long will the course be late?
     *
     * Set students checking in after "hh:mm:ss" to "late".
     */
    late_time: import("myzod").StringType;
    /**
     * How long will the course be closed / expired?
     *
     * Expire the course after "hh:mm:ss".
     */
    expire_time: import("myzod").StringType;
}>;
/**
 * The request of `CreateCourse()`.
 */
export declare type CreateCourseRequest = Infer<typeof CreateCourseRequestSchema>;
//# sourceMappingURL=req_course.d.ts.map