import BaseGetJson from "./get_base";

export default function GetJson(url: RequestInfo): Promise<Response> {
    return BaseGetJson(url, {});
}
