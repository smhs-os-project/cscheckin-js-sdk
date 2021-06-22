import type CSCAuth from "../../auth";
/**
 * Get the share link.
 */
export default function GetShareLink(courseId: string, auth: CSCAuth): Promise<import("../../types/error/std_error").WouldFail<{
    link: string;
}>>;
//# sourceMappingURL=get_share_link.d.ts.map