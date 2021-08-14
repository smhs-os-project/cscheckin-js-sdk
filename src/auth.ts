/**
 * The authentication-related part of this SDK.
 *
 * The `default` class is `CSCAuth`.
 *
 * @module
 */
import myzod from "myzod";
import GetAccessToken from "./logic/auth/get_access_token";
import GetUserInfo from "./logic/auth/get_user_info";
import RevokeAccessToken from "./logic/auth/revoke_access_token";
import SetIdentity from "./logic/auth/set_ident";
import type { AuthTokenResponse, AuthUserResponse } from "./types";
import { AuthTokenResponseSchema, AuthUserResponseSchema } from "./types";

/**
 * The structure that `CSCAuth.export()` will return.
 */
export const CSCAuthExportStructure = myzod.object({
  gIdToken: myzod.string(),
  gAccessToken: myzod.string(),
  accessData: AuthTokenResponseSchema.optional(),
});

/**
 * The CSCheckin authentication manager.
 */
export default class CSCAuth {
  private accessData: AuthTokenResponse | null = null;

  /**
   * Construct this manager.
   *
   * @param gIdToken The ID token received from Google.
   * @param gAccessToken The access token received from Google.
   */
  constructor(private gIdToken: string, private gAccessToken: string) {}

  /**
   * Get the credential including token and user information.
   */
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

  /**
   * Get the authentication header that can use for directly requesting API.
   */
  async getAuthenticationHeader(): Promise<string> {
    const accessData = await this.getAccessData();
    return `Bearer ${accessData.access_token}`;
  }

  /**
   * Get the user information.
   *
   * The response of this API won't be cached!
   */
  async userInfo(): Promise<AuthUserResponse> {
    const rawInfo = await GetUserInfo(this);
    return AuthUserResponseSchema.parse(rawInfo);
  }

  /**
   * Set the student class and no.
   *
   * @param userClass The student class.
   * @param userNo The student no.
   */
  async setIdentity(userClass: string, userNo: string) {
    return SetIdentity({ class: userClass, number: userNo }, this);
  }

  /**
   * Revoke this access token.
   */
  async revoke() {
    return RevokeAccessToken(this);
  }

  /**
   * Import the credential from JSON-serialized CSCAuthExportStructure.
   *
   * @param data the JSON-serialized data from `CSCAuth.export()`.
   */
  static import(data: string): CSCAuth {
    const deserialized = CSCAuthExportStructure.parse(JSON.parse(data));
    const { gAccessToken, gIdToken, accessData } = deserialized;
    const auth = new CSCAuth(gAccessToken, gIdToken);
    auth.accessData = accessData || null;

    return auth;
  }

  /**
   * Export the credential to JSON-serialized CSCAuthExportStructure.
   *
   * @returns {string} JSON-serialized CSCAuthExportStructure
   */
  export(): string {
    return JSON.stringify({
      gAccessToken: this.gAccessToken,
      gIdToken: this.gIdToken,
      accessData: this.accessData,
    });
  }
}
