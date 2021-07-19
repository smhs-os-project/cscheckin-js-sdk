import type { AuthTokenResponse, AuthUserResponse } from "./types";
export declare const CSCAuthExportStructure: import("myzod").ObjectType<{
    gIdToken: import("myzod").StringType;
    gAccessToken: import("myzod").StringType;
    accessData: import("myzod").OptionalType<import("myzod").ObjectType<{
        access_token: import("myzod").StringType;
        token_type: import("myzod").StringType;
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
    }>>;
}>;
export default class CSCAuth {
    private gIdToken;
    private gAccessToken;
    private accessData;
    constructor(gIdToken: string, gAccessToken: string);
    getAccessData(): Promise<AuthTokenResponse | null>;
    getAuthenticationHeader(): Promise<string | null>;
    userInfo(): Promise<AuthUserResponse | null>;
    setIdentity(userClass: string, userNo: string): Promise<boolean>;
    revoke(): Promise<boolean>;
    static import(data: string): CSCAuth | null;
    export(): string;
}
//# sourceMappingURL=auth.d.ts.map