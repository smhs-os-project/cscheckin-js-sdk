import type { Infer } from "myzod";
import myzod from "myzod";

export const AuthTokenRequestSchema = myzod.object({
  id_token: myzod.string(),
  access_token: myzod.string(),
});

export type AuthTokenRequest = Infer<typeof AuthTokenRequestSchema>;
