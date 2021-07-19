import type { Infer } from "myzod";
import { CheckinState } from "../common/checkin_state";
export declare const TeacherCheckinResponseSchema: import("myzod").ObjectType<{
    checkin_id: import("myzod").NumberType;
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    created_at: import("myzod").UnionType<[import("myzod").DateType, import("myzod").StringType]>;
    name: import("myzod").StringType;
    class: import("myzod").StringType;
    number: import("myzod").StringType;
}>;
export declare const TeacherCheckinListResponseSchema: import("myzod").ArrayType<import("myzod").ObjectType<{
    checkin_id: import("myzod").NumberType;
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    created_at: import("myzod").UnionType<[import("myzod").DateType, import("myzod").StringType]>;
    name: import("myzod").StringType;
    class: import("myzod").StringType;
    number: import("myzod").StringType;
}>>;
export declare type TeacherCheckinResponse = Infer<typeof TeacherCheckinResponseSchema>;
export declare type TeacherCheckinListResponse = Infer<typeof TeacherCheckinListResponseSchema>;
//# sourceMappingURL=resp_checkin_list.d.ts.map