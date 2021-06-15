import CSCAuth from "../../auth";
import BuildUri from "../build_uri";
import { AnyType } from "myzod/libs/types";
import PostJsonAuth from "../json/post_auth";
import ResponseChecker from "./response_checker";

export default async function PostAuthMethod<T extends object, TT extends AnyType>
    (method: string, data: T, auth: CSCAuth, schema: TT) {
    const res = await PostJsonAuth(BuildUri(method), data, auth);

    return ResponseChecker(res, schema);
}
