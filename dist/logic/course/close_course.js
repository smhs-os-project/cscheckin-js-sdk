import"core-js/modules/es.array.concat";import"core-js/modules/es.promise";import"core-js/modules/es.object.to-string";import a,{clientInstance as b}from"../../request/client";export default async function CloseCourse(c,d){var e=(await b.textFetcher("/course/".concat(c),await a.authRequest(d,{method:"DELETE"}))).statusCode;return a.isResponseOk(null!=e?e:-1)}
//# sourceMappingURL=close_course.js.map