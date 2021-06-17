import { Infer } from "myzod";
import { CheckinState } from "../common/checkin_state";
export declare const TeacherCheckinResponseSchema: import("myzod/libs/types").ObjectType<{
    checkin_id: import("myzod/libs/types").StringType;
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    created_at: import("myzod/libs/types").UnionType<[import("myzod/libs/types").DateType, import("myzod/libs/types").StringType]>;
    name: import("myzod/libs/types").StringType;
    class: import("myzod/libs/types").StringType;
    number: import("myzod/libs/types").StringType;
}>;
export declare const TeacherCheckinListResponseSchema: import("myzod/libs/types").ArrayType<import("myzod/libs/types").ObjectType<{
    checkin_id: import("myzod/libs/types").StringType;
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    created_at: import("myzod/libs/types").UnionType<[import("myzod/libs/types").DateType, import("myzod/libs/types").StringType]>;
    name: import("myzod/libs/types").StringType;
    class: import("myzod/libs/types").StringType;
    number: import("myzod/libs/types").StringType;
}>>;
export declare type TeacherCheckinResponse = Infer<typeof TeacherCheckinResponseSchema>;
export declare type TeacherCheckinListResponse = Infer<typeof TeacherCheckinListResponseSchema>;
//# sourceMappingURL=resp_checkin_list.d.ts.map