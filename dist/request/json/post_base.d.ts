import "../polyfill";
export default function BasePostJson<T extends Record<string, unknown>>(url: RequestInfo, data: T, { headers, body, ...init }: RequestInit): Promise<Response>;
//# sourceMappingURL=post_base.d.ts.map