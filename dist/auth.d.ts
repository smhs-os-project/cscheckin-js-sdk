import { Organization } from "./types/auth/req_auth_token";
import { AuthTokenResponse } from "./types/auth/resp_auth_token";
import { AuthUserResponse } from "./types/auth/resp_auth_user";
export default class CSCAuth {
    private organization;
    private gIdToken;
    private gAccessToken;
    private accessData;
    constructor(organization: Organization, gIdToken: string, gAccessToken: string);
    getAccessData(): Promise<AuthTokenResponse | null>;
    getAuthenticationHeader(): Promise<string | null>;
    userInfo(): Promise<AuthUserResponse | null>;
    setIdentity(userClass: number, userNo: number): Promise<boolean>;
}
//# sourceMappingURL=auth.d.ts.map