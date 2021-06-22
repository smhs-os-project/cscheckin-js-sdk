import "../polyfill";
import { userAgent } from "../consts";

export default function BasePostJson<T extends Record<string, unknown>>(
  url: RequestInfo,
  data: T,
  { headers, body, ...init }: RequestInit
): Promise<Response> {
  return fetch(url, {
    ...init,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": userAgent,
      ...headers,
    },
    body: JSON.stringify(data),
  });
}
