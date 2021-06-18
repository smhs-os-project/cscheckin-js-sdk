import { Infer } from "myzod";
export declare const AuthTokenResponseSchema: import("myzod/libs/types").ObjectType<{
    access_token: import("myzod/libs/types").StringType;
    token_type: import("myzod/libs/types").StringType;
    /**
     * `exp` is an unix timestamp.
     */
    exp: import("myzod/libs/types").NumberType;
    user: import("myzod/libs/types").ObjectType<{
        id: import("myzod/libs/types").NumberType;
        google_user_id: import("myzod/libs/types").StringType;
        domain: import("myzod/libs/types").StringType;
        name: import("myzod/libs/types").StringType;
        email: import("myzod/libs/types").StringType;
        photo: import("myzod/libs/types").StringType;
        created_at: import("myzod/libs/types").StringType;
        updated_at: import("myzod/libs/types").StringType;
        student: import("myzod/libs/types").OptionalType<import("myzod/libs/types").ObjectType<{
            class: import("myzod/libs/types").StringType;
            number: import("myzod/libs/types").StringType;
        }>>;
    }>;
}>;
export declare type AuthTokenResponse = Infer<typeof AuthTokenResponseSchema>;
//# sourceMappingURL=resp_auth_token.d.ts.map