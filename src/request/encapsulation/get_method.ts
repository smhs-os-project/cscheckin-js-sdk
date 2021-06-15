import CSCAuth from "../../auth";
import BuildUri from "../build_uri";
import GetJsonAuth from "../json/get_auth";
import { AnyType } from "myzod/libs/types";
import ResponseChecker from "./response_checker";

export default async function GetMethod<T extends AnyType>
    (method: string, auth: CSCAuth, schema: T) {
    const res = await GetJsonAuth(BuildUri(method), auth);

    return ResponseChecker(res, schema);
}
