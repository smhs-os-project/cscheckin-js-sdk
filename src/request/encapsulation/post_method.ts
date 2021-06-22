import type { AnyType } from "myzod/libs/types";
import BuildUri from "../build_uri";
import ResponseChecker from "./response_checker";
import PostJson from "../json/post";

export default async function PostMethod<T extends object, TT extends AnyType>(
  method: string,
  data: T,
  schema: TT
) {
  const res = await PostJson(BuildUri(method), data);

  return ResponseChecker(res, schema);
}
