import { userAgent } from "../consts";

export default function BaseGetJson(url: RequestInfo, { headers, ...init }: RequestInit): Promise<Response> {
    return fetch(url, {
        ...init,
        headers: {
            "User-Agent": userAgent,
            ...headers
        },
    })
}