import type { Infer } from "myzod";
/**
 * The schema of the response of `GetAccessToken()`.
 */
export declare const AuthTokenResponseSchema: import("myzod").ObjectType<{
    /**
     * The access token for accessing most of the CSCheckin services.
     */
    access_token: import("myzod").StringType;
    /**
     * The token type.
     */
    token_type: import("myzod").StringType;
    /**
     * When does this token expire?
     *
     * `exp` is a UNIX timestamp.
     */
    exp: import("myzod").NumberType;
    /**
     * The user information.
     *
     * @see AuthUserResponseSchema
     */
    user: import("myzod").ObjectType<{
        id: import("myzod").NumberType;
        google_user_id: import("myzod").StringType;
        domain: import("myzod").StringType;
        name: import("myzod").StringType;
        email: import("myzod").StringType;
        photo: import("myzod").StringType;
        created_at: import("myzod").StringType;
        updated_at: import("myzod").StringType;
        student: import("myzod").OptionalType<import("myzod").ObjectType<{
            class: import("myzod").StringType;
            number: import("myzod").StringType;
        }>>;
    }>;
}>;
/**
 * The response of `GetAccessToken()`.
 */
export declare type AuthTokenResponse = Infer<typeof AuthTokenResponseSchema>;
//# sourceMappingURL=resp_auth_token.d.ts.map