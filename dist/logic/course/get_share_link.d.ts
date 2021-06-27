import type CSCAuth from "../../auth";
/**
 * Get the share link.
 */
export default function GetShareLink(courseId: string, auth: CSCAuth): Promise<import("../../request/client").ParsedResponse<{
    link: string;
}, {
    error?: string | undefined;
    message?: string | undefined;
}, null>>;
//# sourceMappingURL=get_share_link.d.ts.map