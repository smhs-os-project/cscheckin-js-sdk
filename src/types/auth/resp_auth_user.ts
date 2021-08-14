import type { Infer } from "myzod";
import myzod from "myzod";
import { AuthIdentRequestSchema } from "./req_auth_ident";

/**
 * The schema of the response of `GetUserInfo()`.
 */
export const AuthUserResponseSchema = myzod.object({
  /**
   * The unique user ID recorded in the backend database.
   */
  id: myzod.number(),
  /**
   * The user ID recorded in the Google database.
   */
  google_user_id: myzod.string(),
  /**
   * The domain serving the user.
   *
   * @example `example.com`
   */
  domain: myzod.string(),
  /**
   * The name of this user.
   *
   * @example `Jesse Lin`
   */
  name: myzod.string(),
  /**
   * The email of this user.
   *
   * @example `example@example.com`
   */
  email: myzod.string(),
  /**
   * The avatar URL of this user.
   */
  photo: myzod.string(),
  /**
   * When did this user entry create.
   */
  created_at: myzod.string(),
  /**
   * When did this user entry update.
   */
  updated_at: myzod.string(),
  /**
   * The student information.
   *
   * @see AuthIdentRequestSchema
   */
  student: AuthIdentRequestSchema.optional(),
});

/**
 * The response of `GetUserInfo()`.
 */
export type AuthUserResponse = Infer<typeof AuthUserResponseSchema>;
