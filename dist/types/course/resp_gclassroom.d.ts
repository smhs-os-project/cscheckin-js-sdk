import type { Infer } from "myzod";
export declare const GClassroomResponseSchema: import("myzod").ObjectType<{
    google_classroom_id: import("myzod").StringType;
    name: import("myzod").StringType;
}>;
export declare const GClassroomListResponseSchema: import("myzod").ArrayType<import("myzod").ObjectType<{
    google_classroom_id: import("myzod").StringType;
    name: import("myzod").StringType;
}>>;
export declare type GClassroomResponse = Infer<typeof GClassroomResponseSchema>;
export declare type GClassroomListResponse = Infer<typeof GClassroomListResponseSchema>;
//# sourceMappingURL=resp_gclassroom.d.ts.map