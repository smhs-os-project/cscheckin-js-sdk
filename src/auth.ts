import myzod from "myzod";
import { ValidationError } from "myzod";
import GetAccessToken from "./logic/auth/get_access_token";
import GetUserInfo from "./logic/auth/get_user_info";
import RevokeAccessToken from "./logic/auth/revoke_access_token";
import SetIdentity from "./logic/auth/set_ident";
import { Organization } from "./types/auth/req_auth_token";
import { AuthTokenResponse, AuthTokenResponseSchema } from "./types/auth/resp_auth_token";
import { AuthUserResponse, AuthUserResponseSchema } from "./types/auth/resp_auth_user";

export const CSCAuthExportStructure = myzod.object({
    organization: myzod.enum(Organization),
    gIdToken: myzod.string(),
    gAccessToken: myzod.string(),
    accessData: AuthTokenResponseSchema.optional(),
});

export default class CSCAuth {
    private accessData: AuthTokenResponse | null = null;

    constructor(private organization: Organization, private gIdToken: string, private gAccessToken: string) {}

    async getAccessData(): Promise<AuthTokenResponse | null> {
        // get lazily
        if (!this.accessData) {
            const accessData = await GetAccessToken(this.organization, {
                id_token: this.gIdToken,
                access_token: this.gAccessToken
            });
            const resp = AuthTokenResponseSchema.try(accessData);

            if (resp instanceof ValidationError) {
                console.error("error: accessData is not a valid data.");
                console.log(accessData);
            } else {
                this.accessData = resp;
            }
        }

        return this.accessData;
    }

    async getAuthenticationHeader(): Promise<string | null> {
        const accessData = await this.getAccessData();
        if (accessData) return `Bearer ${accessData.access_token}`;
        return null;
    }

    async userInfo(): Promise<AuthUserResponse | null> {
        const accessData = await this.getAccessData();
        if (accessData) {
            const rawInfo = await GetUserInfo(this);
            const info = AuthUserResponseSchema.try(rawInfo);

            if (info instanceof ValidationError) {
                console.error("failed to get the user info");
                console.error(rawInfo);
                return null;
            }

            return info;
        }
        return null;
    }

    async setIdentity(userClass: number, userNo: number): Promise<boolean> {
        return SetIdentity({ class: userClass, number: userNo }, this);
    }

    async revoke(): Promise<boolean> {
        return RevokeAccessToken(this);
    }

    static import(data: string): CSCAuth | null {
        const deserialized = CSCAuthExportStructure.try(
            JSON.parse(data)
        );
        if (deserialized instanceof ValidationError) return null;
     
        const { organization, gAccessToken, gIdToken, accessData } = deserialized;
        const auth = new CSCAuth(organization, gAccessToken, gIdToken);
        auth.accessData = accessData || null;

        return auth;
    }

    export(): string {
        return JSON.stringify({
            organization: this.organization,
            gAccessToken: this.gAccessToken,
            gIdToken: this.gIdToken,
            accessData: this.accessData,
        });
    }
}
