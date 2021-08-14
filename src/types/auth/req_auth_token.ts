import type { Infer } from "myzod";
import myzod from "myzod";

/**
 * The schema of the request of `GetAccessToken()`.
 */
export const AuthTokenRequestSchema = myzod.object({
  /**
   * The `id_token` received from Google.
   */
  id_token: myzod.string(),
  /**
   * The `access_token` received from Google.
   */
  access_token: myzod.string(),
});

/**
 * The request of `GetAcessToken()`.
 */
export type AuthTokenRequest = Infer<typeof AuthTokenRequestSchema>;
