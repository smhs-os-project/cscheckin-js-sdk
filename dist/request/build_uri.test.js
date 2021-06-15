"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_uri_1 = require("./build_uri");
describe("base: https://aaa.com", () => {
    const base = "https://aaa.com";
    test("relpath: /bbb", () => {
        expect(build_uri_1.iBuildUri(base, "/bbb")).toBe("https://aaa.com/bbb");
    });
    test("relpath: /", () => {
        expect(build_uri_1.iBuildUri(base, "/")).toBe("https://aaa.com/");
    });
    test("relpath: ''", () => {
        expect(build_uri_1.iBuildUri(base, "")).toBe("https://aaa.com");
    });
});
describe("base: https://aaa.com/", () => {
    const base = "https://aaa.com/";
    test("relpath: /bbb", () => {
        expect(build_uri_1.iBuildUri(base, "/bbb")).toBe("https://aaa.com/bbb");
    });
    test("relpath: /", () => {
        expect(build_uri_1.iBuildUri(base, "/")).toBe("https://aaa.com/");
    });
    test("relpath: ''", () => {
        expect(build_uri_1.iBuildUri(base, "")).toBe("https://aaa.com");
    });
});
//# sourceMappingURL=build_uri.test.js.map