import { userAgent } from "../consts";

export default function GetJson(url: RequestInfo): Promise<Response> {
    return fetch(url, {
        headers: {
            "User-Agent": userAgent,
        },
    })
}