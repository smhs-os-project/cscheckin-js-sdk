import type { Infer } from "myzod";
/**
 * The schema of the course.
 */
export declare const CourseResponseSchema: import("myzod").ObjectType<{
    /**
     * The unique course ID recorded in the backend database.
     */
    id: import("myzod").NumberType;
    /**
     * The ID of the Google Classroom which the course located in.
     */
    google_classroom_id: import("myzod").StringType;
    /**
     * The name of this course.
     */
    name: import("myzod").StringType;
    /**
     * The teacher ID of this course.
     */
    teacher_id: import("myzod").NumberType;
    /**
     * When did/will this course start?
     */
    start_timestamp: import("myzod").DateType;
    /**
     * How long will this course be late?
     *
     * @see CreateCourseRequestSchema
     */
    late_time: import("myzod").StringType;
    /**
     * How long will this course be closed?
     *
     * @see CreateCourseRequestSchema
     */
    expire_time: import("myzod").StringType;
    /**
     * The UUID of this course.
     */
    uuid: import("myzod").StringType;
    /**
     * When did the entry of this course create?
     */
    created_at: import("myzod").StringType;
    /**
     * When did the entry of this course update?
     */
    updated_at: import("myzod").StringType;
}>;
/**
 * The schema of the courses list.
 */
export declare const CourseListResponseSchema: import("myzod").ArrayType<import("myzod").ObjectType<{
    /**
     * The unique course ID recorded in the backend database.
     */
    id: import("myzod").NumberType;
    /**
     * The ID of the Google Classroom which the course located in.
     */
    google_classroom_id: import("myzod").StringType;
    /**
     * The name of this course.
     */
    name: import("myzod").StringType;
    /**
     * The teacher ID of this course.
     */
    teacher_id: import("myzod").NumberType;
    /**
     * When did/will this course start?
     */
    start_timestamp: import("myzod").DateType;
    /**
     * How long will this course be late?
     *
     * @see CreateCourseRequestSchema
     */
    late_time: import("myzod").StringType;
    /**
     * How long will this course be closed?
     *
     * @see CreateCourseRequestSchema
     */
    expire_time: import("myzod").StringType;
    /**
     * The UUID of this course.
     */
    uuid: import("myzod").StringType;
    /**
     * When did the entry of this course create?
     */
    created_at: import("myzod").StringType;
    /**
     * When did the entry of this course update?
     */
    updated_at: import("myzod").StringType;
}>>;
/**
 * The course.
 */
export declare type CourseResponse = Infer<typeof CourseResponseSchema>;
/**
 * The courses list.
 */
export declare type CourseListResponse = Infer<typeof CourseListResponseSchema>;
//# sourceMappingURL=resp_course.d.ts.map