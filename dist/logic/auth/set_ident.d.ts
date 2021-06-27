import type CSCAuth from "../../auth";
import type { AuthIdentRequest } from "../../types";
/**
 * Set the identity of @param auth.
 *
 * @returns Is it success?
 */
export default function SetIdentity(request: AuthIdentRequest, auth: CSCAuth): Promise<import("../../request/client").ParsedResponse<boolean, Error, {
    statusCode: number;
} | null>>;
//# sourceMappingURL=set_ident.d.ts.map