import type CSCAuth from "../../auth";
import BasePostJson from "./post_base";

export default async function PostJsonAuth<T extends object>(
  url: RequestInfo,
  data: T,
  auth: CSCAuth
): Promise<Response | null> {
  const authentication = await auth.getAuthenticationHeader();

  if (authentication)
    return BasePostJson(url, data, {
      headers: {
        Authorization: authentication,
      },
    });

  return null;
}
