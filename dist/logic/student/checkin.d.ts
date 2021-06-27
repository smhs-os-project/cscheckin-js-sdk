import type CSCAuth from "../../auth";
export default function Checkin(courseUUID: string, auth: CSCAuth): Promise<import("../../request/client").ParsedResponse<boolean, Error, {
    statusCode: number;
} | null>>;
//# sourceMappingURL=checkin.d.ts.map