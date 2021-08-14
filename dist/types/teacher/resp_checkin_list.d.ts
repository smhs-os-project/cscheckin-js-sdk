import type { Infer } from "myzod";
import { CheckinState } from "../common/checkin_state";
/**
 * The schema of the checkin information of this student.
 */
export declare const StudentCheckinInfoResponseSchema: import("myzod").ObjectType<{
    /**
     * The record ID of this checkin.
     */
    checkin_id: import("myzod").NumberType;
    /**
     * The checkin state of this student.
     *
     * @see CheckinState
     */
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    /**
     * When did this checkin record create.
     */
    created_at: import("myzod").UnionType<[import("myzod").DateType, import("myzod").StringType]>;
    /**
     * The name of this student.
     */
    name: import("myzod").StringType;
    /**
     * The class of this student.
     *
     * You should handle the case that this is an empty string.
     */
    class: import("myzod").StringType;
    /**
     * The number of this student.
     *
     * You should handle the case that this is an empty string.
     */
    number: import("myzod").StringType;
}>;
/**
 * The schema of the students list with their checkin information.
 */
export declare const TeacherCheckinListResponseSchema: import("myzod").ArrayType<import("myzod").ObjectType<{
    /**
     * The record ID of this checkin.
     */
    checkin_id: import("myzod").NumberType;
    /**
     * The checkin state of this student.
     *
     * @see CheckinState
     */
    state: import("myzod/libs/types").EnumType<typeof CheckinState>;
    /**
     * When did this checkin record create.
     */
    created_at: import("myzod").UnionType<[import("myzod").DateType, import("myzod").StringType]>;
    /**
     * The name of this student.
     */
    name: import("myzod").StringType;
    /**
     * The class of this student.
     *
     * You should handle the case that this is an empty string.
     */
    class: import("myzod").StringType;
    /**
     * The number of this student.
     *
     * You should handle the case that this is an empty string.
     */
    number: import("myzod").StringType;
}>>;
/**
 * The checkin information of this student.
 */
export declare type StudentCheckinInfoResponse = Infer<typeof StudentCheckinInfoResponseSchema>;
/**
 * The students list with their checkin information.
 */
export declare type TeacherCheckinListResponse = Infer<typeof TeacherCheckinListResponseSchema>;
//# sourceMappingURL=resp_checkin_list.d.ts.map