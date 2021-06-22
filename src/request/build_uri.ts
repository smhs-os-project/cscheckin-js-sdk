import { endpoint } from "./consts";

export function iBuildUri(base: string, method: string) {
  return `${base.replace(/\/$/g, "")}${method}`;
}

export default function BuildUri(method: string) {
  return iBuildUri(endpoint, method);
}
