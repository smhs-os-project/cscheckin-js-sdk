import IsApiWorking from "./is_api_working"

test("API should be working", async () => {
    expect(await IsApiWorking()).toBe(true);
})
