import type { AnyType } from "myzod/libs/types";
import type CSCAuth from "../../auth";
import BuildUri from "../build_uri";
import PostJsonAuth from "../json/post_auth";
import ResponseChecker from "./response_checker";

export default async function PostAuthMethod<
  T extends object,
  TT extends AnyType
>(method: string, data: T, auth: CSCAuth, schema: TT) {
  const res = await PostJsonAuth(BuildUri(method), data, auth);

  return ResponseChecker(res, schema);
}
