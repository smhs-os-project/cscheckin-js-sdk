import type CSCAuth from "../../auth";
export default function CheckinList(courseId: number, auth: CSCAuth): Promise<{
    number: string;
    class: string;
    name: string;
    created_at: string | Date;
    state: import("../../types").CheckinState;
    checkin_id: number;
}[]>;
//# sourceMappingURL=checkin_list.d.ts.map