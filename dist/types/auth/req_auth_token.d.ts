import type { Infer } from "myzod";
export declare const AuthTokenRequestSchema: import("myzod").ObjectType<{
    id_token: import("myzod").StringType;
    access_token: import("myzod").StringType;
}>;
export declare type AuthTokenRequest = Infer<typeof AuthTokenRequestSchema>;
//# sourceMappingURL=req_auth_token.d.ts.map