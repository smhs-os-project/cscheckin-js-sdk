import type CSCAuth from "../../auth";
/**
 * Get the available classrooms.
 */
export default function GetClassroomsList(auth: CSCAuth): Promise<{
    name: string;
    google_classroom_id: string;
}[]>;
//# sourceMappingURL=get_classrooms_list.d.ts.map