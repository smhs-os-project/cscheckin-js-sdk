import type { Infer } from "myzod";
export declare const GClassroomResponseSchema: import("myzod/libs/types").ObjectType<{
    google_classroom_id: import("myzod/libs/types").StringType;
    name: import("myzod/libs/types").StringType;
}>;
export declare const GClassroomListResponseSchema: import("myzod/libs/types").ArrayType<import("myzod/libs/types").ObjectType<{
    google_classroom_id: import("myzod/libs/types").StringType;
    name: import("myzod/libs/types").StringType;
}>>;
export declare type GClassroomResponse = Infer<typeof GClassroomResponseSchema>;
export declare type GClassroomListResponse = Infer<typeof GClassroomListResponseSchema>;
//# sourceMappingURL=resp_gclassroom.d.ts.map