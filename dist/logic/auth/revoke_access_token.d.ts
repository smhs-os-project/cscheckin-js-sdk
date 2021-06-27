import type CSCAuth from "../../auth";
/**
 * Revoke the access token
 *
 * @return Is it success?
 */
export default function RevokeAccessToken(auth: CSCAuth): Promise<import("../../request/client").ParsedResponse<boolean, Error, {
    statusCode: number;
} | null>>;
//# sourceMappingURL=revoke_access_token.d.ts.map