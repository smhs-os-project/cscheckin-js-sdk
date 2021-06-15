"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../consts");
function BasePostJson(url, data, { headers, body, ...init }) {
    return fetch(url, {
        ...init,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": consts_1.userAgent,
            ...headers,
        },
        body: JSON.stringify(data),
    });
}
exports.default = BasePostJson;
//# sourceMappingURL=post_base.js.map