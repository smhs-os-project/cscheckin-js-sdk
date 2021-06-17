import type CSCAuth from "../../auth";
export default function Checkin(courseUUID: string, auth: CSCAuth): Promise<import("../../types/error/std_error").WouldFail<{
    id: number;
    created_at: Date;
    updated_at: Date;
    course_id: number;
    student_id: string;
    state: import("../../types/common/checkin_state").CheckinState;
}>>;
//# sourceMappingURL=checkin.d.ts.map