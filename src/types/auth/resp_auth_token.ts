import type { Infer } from "myzod";
import myzod from "myzod";
import { AuthUserResponseSchema } from "./resp_auth_user";

/**
 * The schema of the response of `GetAccessToken()`.
 */
export const AuthTokenResponseSchema = myzod.object({
  /**
   * The access token for accessing most of the CSCheckin services.
   */
  access_token: myzod.string(),
  /**
   * The token type.
   */
  token_type: myzod.string(),
  /**
   * When does this token expire?
   *
   * `exp` is a UNIX timestamp.
   */
  exp: myzod.number(),
  /**
   * The user information.
   *
   * @see AuthUserResponseSchema
   */
  user: AuthUserResponseSchema,
});

/**
 * The response of `GetAccessToken()`.
 */
export type AuthTokenResponse = Infer<typeof AuthTokenResponseSchema>;
