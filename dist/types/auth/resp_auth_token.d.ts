import type { Infer } from "myzod";
export declare const AuthTokenResponseSchema: import("myzod").ObjectType<{
    access_token: import("myzod").StringType;
    token_type: import("myzod").StringType;
    /**
     * `exp` is an unix timestamp.
     */
    exp: import("myzod").NumberType;
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
export declare type AuthTokenResponse = Infer<typeof AuthTokenResponseSchema>;
//# sourceMappingURL=resp_auth_token.d.ts.map