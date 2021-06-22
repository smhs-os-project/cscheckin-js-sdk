import type CSCAuth from "../../auth";
/**
 * Get the owner info by @param auth.
 */
export default function GetUserInfo(auth: CSCAuth): Promise<import("../../types/error/std_error").WouldFail<{
    student?: {
        number: string;
        class: string;
    } | undefined;
    id: number;
    google_user_id: string;
    domain: string;
    name: string;
    email: string;
    photo: string;
    created_at: string;
    updated_at: string;
}>>;
//# sourceMappingURL=get_user_info.d.ts.map