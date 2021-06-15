import { userAgent } from "../consts";

export default function BasePostJson<T extends object>(url: RequestInfo, data: T, { headers, body, ...init }: RequestInit): Promise<Response> {
    return fetch(url, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            "User-Agent": userAgent,
            ...headers,
        },
        body: JSON.stringify(data),
    })
}
