import type { AuthTokenRequest } from "../../types";
/**
 * Get the access token.
 *
 * @param request The Google token ID & access token
 */
export default function GetAccessToken(request: AuthTokenRequest): Promise<{
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
}>;
//# sourceMappingURL=get_access_token.d.ts.map