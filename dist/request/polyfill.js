"use strict";
// The polyfill should use "require" to
// prevent the "node-fetch" be imported
// in the browser environment.
// eslint-disable-next-line global-require
globalThis.fetch = globalThis.fetch || require("node-fetch");
//# sourceMappingURL=polyfill.js.map