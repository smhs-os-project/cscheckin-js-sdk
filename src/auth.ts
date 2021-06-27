import myzod, { ValidationError } from "myzod";

import * as Sentry from "@sentry/browser";
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

  async getAccessData(): Promise<AuthTokenResponse | null> {
    // get lazily
    if (!this.accessData) {
      const accessData = await GetAccessToken({
        id_token: this.gIdToken,
        access_token: this.gAccessToken,
      });
      const resp = AuthTokenResponseSchema.try(accessData);

      if (resp instanceof ValidationError) {
        Sentry.captureMessage(
          `error: accessData is not a valid data: ${JSON.stringify(accessData)}`
        );
        Sentry.captureException(resp);
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
        Sentry.captureMessage(`failed to get the user info: ${rawInfo}`);
        Sentry.captureException(info);
        return null;
      }

      return info;
    }
    return null;
  }

  async setIdentity(userClass: string, userNo: string) {
    return SetIdentity({ class: userClass, number: userNo }, this);
  }

  async revoke() {
    return RevokeAccessToken(this);
  }

  static import(data: string): CSCAuth | null {
    const deserialized = CSCAuthExportStructure.try(JSON.parse(data));
    if (deserialized instanceof ValidationError) return null;

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
