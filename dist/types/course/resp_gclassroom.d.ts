import type { Infer } from "myzod";
/**
 * The schema of entries in the response of `GetClassroomsList()`.
 */
export declare const GClassroomResponseSchema: import("myzod").ObjectType<{
    /**
     * The ID of this Classroom.
     */
    google_classroom_id: import("myzod").StringType;
    /**
     * The name of this Classroom.
     */
    name: import("myzod").StringType;
}>;
/**
 * The schema of the response of `GetClassroomsList()`.
 */
export declare const GClassroomListResponseSchema: import("myzod").ArrayType<import("myzod").ObjectType<{
    /**
     * The ID of this Classroom.
     */
    google_classroom_id: import("myzod").StringType;
    /**
     * The name of this Classroom.
     */
    name: import("myzod").StringType;
}>>;
/**
 * Entries in the response of `GetClassroomsList()`.
 */
export declare type GClassroomResponse = Infer<typeof GClassroomResponseSchema>;
/**
 * The response of `GetClassroomsList()`.
 */
export declare type GClassroomListResponse = Infer<typeof GClassroomListResponseSchema>;
//# sourceMappingURL=resp_gclassroom.d.ts.map