import type { Infer } from "myzod";
import { CheckinState } from "../common/checkin_state";
export declare const CheckinResponseSchema: import("myzod").ObjectType<{
    course_id: import("myzod").NumberType;
    created_at: import("myzod").UnionType<[import("myzod").DateType, import("myzod").StringType]>;
    id: import("myzod").NumberType;
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    student_id: import("myzod").NumberType;
    updated_at: import("myzod").UnionType<[import("myzod").DateType, import("myzod").StringType]>;
}>;
export declare type CheckinResponse = Infer<typeof CheckinResponseSchema>;
//# sourceMappingURL=resp_checkin.d.ts.map