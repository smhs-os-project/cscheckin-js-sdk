/**
 * Get the Google OAuth2 client ID in the backend.
 */
export default function GetClientId(): Promise<import("../../request/client").ParsedResponse<{
    client_id: string;
    chinese_name: string;
}, {
    error?: string | undefined;
    message?: string | undefined;
}, null>>;
//# sourceMappingURL=get_client_id.d.ts.map