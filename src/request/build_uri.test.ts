import { iBuildUri } from "./build_uri";

describe("base: https://aaa.com", () => {
    const base = "https://aaa.com";

    test("relpath: /bbb", () => {
        expect(iBuildUri(base, "/bbb")).toBe("https://aaa.com/bbb");
    });

    test("relpath: /", () => {
        expect(iBuildUri(base, "/")).toBe("https://aaa.com/");
    });

    test("relpath: ''", () => {
        expect(iBuildUri(base, "")).toBe("https://aaa.com");
    });
});

describe("base: https://aaa.com/", () => {
    const base = "https://aaa.com/";

    test("relpath: /bbb", () => {
        expect(iBuildUri(base, "/bbb")).toBe("https://aaa.com/bbb");
    });

    test("relpath: /", () => {
        expect(iBuildUri(base, "/")).toBe("https://aaa.com/");
    });

    test("relpath: ''", () => {
        expect(iBuildUri(base, "")).toBe("https://aaa.com");
    });
});
