import CSCAuth from "../../auth";
export default function CheckinList(courseId: string, auth: CSCAuth): Promise<import("../../types/error/std_error").WouldFail<{
    number: number;
    class: number;
    name: string;
    created_at: Date;
    checkin_id: number;
    state: import("../../types/common/checkin_state").CheckinState;
}[]>>;
//# sourceMappingURL=checkin_list.d.ts.map