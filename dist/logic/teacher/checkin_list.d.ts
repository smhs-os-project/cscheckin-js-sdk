import CSCAuth from "../../auth";
export default function CheckinList(courseId: string, auth: CSCAuth): Promise<import("../../types/error/std_error").WouldFail<{
    number: number;
    name: string;
    email: string;
    created_at: Date;
    class: number;
    state: import("../../types/common/checkin_state").CheckinState;
    checkin_id: number;
}[]>>;
//# sourceMappingURL=checkin_list.d.ts.map