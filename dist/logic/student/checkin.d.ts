import type CSCAuth from "../../auth";
export default function Checkin(courseUUID: string, auth: CSCAuth): Promise<{
    id: number;
    created_at: string | Date;
    updated_at: string | Date;
    course_id: number;
    state: import("../../types").CheckinState;
    student_id: number;
}>;
//# sourceMappingURL=checkin.d.ts.map