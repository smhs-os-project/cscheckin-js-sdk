import myzod from "myzod";
import GetAccessToken from "./logic/auth/get_access_token";
import GetUserInfo from "./logic/auth/get_user_info";
import RevokeAccessToken from "./logic/auth/revoke_access_token";
import SetIdentity from "./logic/auth/set_ident";
import type { AuthTokenResponse, AuthUserResponse } from "./types";
import { AuthTokenResponseSchema, AuthUserResponseSchema } from "./types";

export const CSCAuthExportStructure = myzod.object({
  gIdToken: myzod.string(),
  gAccessToken: myzod.string(),
  accessData: AuthTokenResponseSchema.optional(),
});

export default class CSCAuth {
  private accessData: AuthTokenResponse | null = null;

  constructor(private gIdToken: string, private gAccessToken: string) {}

  async getAccessData(): Promise<AuthTokenResponse> {
    // get lazily
    if (!this.accessData) {
      const accessData = await GetAccessToken({
        id_token: this.gIdToken,
        access_token: this.gAccessToken,
      });
      this.accessData = AuthTokenResponseSchema.parse(accessData);
    }

    return this.accessData;
  }

  async getAuthenticationHeader(): Promise<string> {
    const accessData = await this.getAccessData();
    return `Bearer ${accessData.access_token}`;
  }

  async userInfo(): Promise<AuthUserResponse> {
    const rawInfo = await GetUserInfo(this);
    return AuthUserResponseSchema.parse(rawInfo);
  }

  async setIdentity(userClass: string, userNo: string) {
    return SetIdentity({ class: userClass, number: userNo }, this);
  }

  async revoke() {
    return RevokeAccessToken(this);
  }

  static import(data: string): CSCAuth {
    const deserialized = CSCAuthExportStructure.parse(JSON.parse(data));
    const { gAccessToken, gIdToken, accessData } = deserialized;
    const auth = new CSCAuth(gAccessToken, gIdToken);
    auth.accessData = accessData || null;

    return auth;
  }

  export(): string {
    return JSON.stringify({
      gAccessToken: this.gAccessToken,
      gIdToken: this.gIdToken,
      accessData: this.accessData,
    });
  }
}
