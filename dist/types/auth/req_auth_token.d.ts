import type { Infer } from "myzod";
/**
 * The schema of the request of `GetAccessToken()`.
 */
export declare const AuthTokenRequestSchema: import("myzod").ObjectType<{
    /**
     * The `id_token` received from Google.
     */
    id_token: import("myzod").StringType;
    /**
     * The `access_token` received from Google.
     */
    access_token: import("myzod").StringType;
}>;
/**
 * The request of `GetAcessToken()`.
 */
export declare type AuthTokenRequest = Infer<typeof AuthTokenRequestSchema>;
//# sourceMappingURL=req_auth_token.d.ts.map