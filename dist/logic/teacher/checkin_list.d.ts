import type CSCAuth from "../../auth";
export default function CheckinList(courseId: string, auth: CSCAuth): Promise<{
    number: string;
    class: string;
    name: string;
    created_at: string | Date;
    checkin_id: number;
    state: import("../../types").CheckinState;
}[]>;
//# sourceMappingURL=checkin_list.d.ts.map