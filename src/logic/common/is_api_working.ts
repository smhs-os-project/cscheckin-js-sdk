import GetMethod from "../../request/encapsulation/get_method";
import { IsApiWorkingResponse, IsApiWorkingResponseSchema } from "../../types/common/resp_is_api_working";

/**
 * Is API working now?
 */
export default async function IsApiWorking(): Promise<boolean> {
    const res = await GetMethod("/", IsApiWorkingResponseSchema);
    return (res as IsApiWorkingResponse)?.success ?? false;
}
