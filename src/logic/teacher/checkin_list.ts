import type CSCAuth from "../../auth";
import { TeacherCheckinListResponseSchema } from "../../types";
import Client, { clientInstance } from "../../request/client";

export default async function CheckinList(courseId: string, auth: CSCAuth) {
  const [response] = await clientInstance.jsonFetcher(
    `/checkin/${courseId}`,
    await Client.authRequest(auth)
  );

  return Client.responseParser(response, TeacherCheckinListResponseSchema);
}
