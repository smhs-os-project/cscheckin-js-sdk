import type CSCAuth from "../../auth";
import { TeacherCheckinListResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

export default async function CheckinList(courseId: string, auth: CSCAuth) {
  const { data } = await clientInstance.jsonFetcher(
    `/checkin/${courseId}`,
    await Client.authRequest(auth)
  );

  return Client.responseParser(data, TeacherCheckinListResponseSchema);
}
