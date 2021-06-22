import type { AuthTokenRequest, Organization } from "../../types/auth/req_auth_token";
/**
 * Get the access token.
 *
 * @organization The organization issuing the id_token and access_token
 */
export default function GetAccessToken(organization: Organization, request: AuthTokenRequest): Promise<import("../../types/error/std_error").WouldFail<{
    access_token: string;
    token_type: string;
    exp: number;
    user: {
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
    };
}>>;
//# sourceMappingURL=get_access_token.d.ts.map