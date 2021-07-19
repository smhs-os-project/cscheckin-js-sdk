import type { Infer } from "myzod";
export declare const AuthUserResponseSchema: import("myzod").ObjectType<{
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
export declare type AuthUserResponse = Infer<typeof AuthUserResponseSchema>;
//# sourceMappingURL=resp_auth_user.d.ts.map