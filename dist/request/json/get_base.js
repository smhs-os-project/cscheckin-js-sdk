"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../consts");
function BaseGetJson(url, { headers, ...init }) {
    return fetch(url, {
        ...init,
        headers: {
            "User-Agent": consts_1.userAgent,
            ...headers
        },
    });
}
exports.default = BaseGetJson;
//# sourceMappingURL=get_base.js.map