import { ValidationError } from "myzod";
import BuildUri from "../../request/build_uri";
import GetJson from "../../request/json/get";
import { IsApiWorkingResponseSchema } from "../../types/common/resp_is_api_working";

export default async function IsApiWorking(): Promise<boolean> {
    const rRes = await GetJson(BuildUri("/"));

    if (rRes.ok) {
        const res = IsApiWorkingResponseSchema.try(await rRes.json());
        if (!(res instanceof ValidationError)) return res.success;
    }

    return false;
}
