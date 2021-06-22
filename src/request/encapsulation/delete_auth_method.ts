import type { AnyType } from "myzod/libs/types";
import type CSCAuth from "../../auth";
import BuildUri from "../build_uri";
import ResponseChecker from "./response_checker";
import DeleteJsonAuth from "../json/delete_auth";

export default async function DeleteAuthMethod<T extends AnyType>(
  method: string,
  auth: CSCAuth,
  schema: T
) {
  const res = await DeleteJsonAuth(BuildUri(method), auth);

  return ResponseChecker(res, schema);
}
