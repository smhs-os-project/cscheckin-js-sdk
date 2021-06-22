import type CSCAuth from "../../auth";
import BuildUri from "../../request/build_uri";
import PostJsonAuth from "../../request/json/post_auth";

export default async function Checkin(
  courseUUID: string,
  auth: CSCAuth
): Promise<boolean> {
  const response = await PostJsonAuth(
    BuildUri(`/checkin/${courseUUID}`),
    {},
    auth
  );

  // TODO: return the explicit error message
  return response?.ok ?? false;
}
