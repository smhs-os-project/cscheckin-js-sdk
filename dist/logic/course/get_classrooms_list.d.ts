import type CSCAuth from "../../auth";
/**
 * Get the available classrooms.
 */
export default function GetClassroomsList(auth: CSCAuth): Promise<import("../../request/client").ParsedResponse<{
    name: string;
    google_classroom_id: string;
}[], {
    error?: string | undefined;
    message?: string | undefined;
}, null>>;
//# sourceMappingURL=get_classrooms_list.d.ts.map