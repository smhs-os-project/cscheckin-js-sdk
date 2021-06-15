import IsApiWorking from "./is_api_working"
import fetch from "node-fetch";

globalThis.fetch = jest.fn(fetch) as any;

test("API should be working", async () => {
    expect(await IsApiWorking()).toBe(true);
})
