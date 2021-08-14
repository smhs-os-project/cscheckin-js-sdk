import type { Infer } from "myzod";
import { CheckinState } from "../common/checkin_state";
/**
 * The schema of the response of `Checkin()`
 */
export declare const CheckinResponseSchema: import("myzod").ObjectType<{
    /**
     * The course ID that checked in.
     */
    course_id: import("myzod").NumberType;
    /**
     * The ID of this checkin record.
     */
    id: import("myzod").NumberType;
    /**
     * The state of this checkin.
     *
     * @see CheckinState
     */
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    /**
     * The ID of the student who checked in.
     */
    student_id: import("myzod").NumberType;
    /**
     * When did this checkin record create.
     */
    created_at: import("myzod").UnionType<[import("myzod").DateType, import("myzod").StringType]>;
    /**
     *  When did this checkin record update.
     */
    updated_at: import("myzod").UnionType<[import("myzod").DateType, import("myzod").StringType]>;
}>;
/**
 * The response of `Checkin()`
 */
export declare type CheckinResponse = Infer<typeof CheckinResponseSchema>;
//# sourceMappingURL=resp_checkin.d.ts.map