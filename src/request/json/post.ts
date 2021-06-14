import { userAgent } from "../consts";

export default function PostJson<T extends object>(url: RequestInfo, data: T): Promise<Response> {
    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "User-Agent": userAgent,
        },
        body: JSON.stringify(data),
    })
}