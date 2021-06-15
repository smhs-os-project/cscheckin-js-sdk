import { ValidationError } from "myzod";
import BuildUri from "../../request/build_uri";
import GetJson from "../../request/json/get";
import { IsApiWorkingResponseSchema } from "../../types/common/resp_is_api_working";

export default async function IsApiWorking(): Promise<boolean> {
    const rRes: unknown = await GetJson(BuildUri("/"));
    const res = IsApiWorkingResponseSchema.try(rRes);

    if (res instanceof ValidationError) return false;
    return res.success;
}
