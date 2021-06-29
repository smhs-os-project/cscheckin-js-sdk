import type { Infer } from "myzod";
import { CheckinState } from "../common/checkin_state";
export declare const CheckinResponseSchema: import("myzod/libs/types").ObjectType<{
    course_id: import("myzod/libs/types").NumberType;
    created_at: import("myzod/libs/types").UnionType<[import("myzod/libs/types").DateType, import("myzod/libs/types").StringType]>;
    id: import("myzod/libs/types").NumberType;
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    student_id: import("myzod/libs/types").NumberType;
    updated_at: import("myzod/libs/types").UnionType<[import("myzod/libs/types").DateType, import("myzod/libs/types").StringType]>;
}>;
export declare type CheckinResponse = Infer<typeof CheckinResponseSchema>;
//# sourceMappingURL=resp_checkin.d.ts.map