import { Infer } from "myzod";
import { CheckinState } from "../common/checkin_state";
export declare const StudentCheckinResponseSchema: import("myzod/libs/types").ObjectType<{
    course_id: import("myzod/libs/types").NumberType;
    student_id: import("myzod/libs/types").StringType;
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    updated_at: import("myzod/libs/types").DateType;
    created_at: import("myzod/libs/types").DateType;
    id: import("myzod/libs/types").NumberType;
}>;
export declare type StudentCheckinResponse = Infer<typeof StudentCheckinResponseSchema>;
//# sourceMappingURL=resp_checkin.d.ts.map