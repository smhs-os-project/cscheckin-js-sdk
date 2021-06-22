import type { AnyType } from "myzod/libs/types";
import BuildUri from "../build_uri";
import ResponseChecker from "./response_checker";
import GetJson from "../json/get";

export default async function GetMethod<T extends AnyType>(
  method: string,
  schema: T
) {
  const res = await GetJson(BuildUri(method));

  return ResponseChecker(res, schema);
}
