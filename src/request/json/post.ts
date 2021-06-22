import BasePostJson from "./post_base";

export default function PostJson<T extends Record<string, unknown>>(
  url: RequestInfo,
  data: T
): Promise<Response> {
  return BasePostJson(url, data, {});
}
