import { endpoint } from "./consts";

export default function BuildUri(method: string) {
    return `${endpoint.replace(/\/$/g, "")}/${method}`;
}
