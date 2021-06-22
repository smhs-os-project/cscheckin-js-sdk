import type CSCAuth from "../../auth";
export default function PostJsonAuth<T extends Record<string, unknown>>(url: RequestInfo, data: T, auth: CSCAuth): Promise<Response | null>;
//# sourceMappingURL=post_auth.d.ts.map