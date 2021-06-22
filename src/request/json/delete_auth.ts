import type CSCAuth from "../../auth";
import BaseGetJson from "./get_base";

export default async function DeleteJsonAuth(
  url: RequestInfo,
  auth: CSCAuth
): Promise<Response | null> {
  const authentication = await auth.getAuthenticationHeader();

  if (authentication)
    return BaseGetJson(url, {
      method: "DELETE",
      headers: {
        Authorization: authentication,
      },
    });

  return null;
}
