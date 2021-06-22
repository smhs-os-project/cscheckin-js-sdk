import BasePostJson from "./post_base";

export default function PostJson<T extends object>(
  url: RequestInfo,
  data: T
): Promise<Response> {
  return BasePostJson(url, data, {});
}
