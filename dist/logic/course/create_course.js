import"core-js/modules/es.array.concat";import"core-js/modules/es.promise";import"core-js/modules/es.object.to-string";import a,{clientInstance as b}from"../../request/client";import{CourseResponseSchema as c}from"../../types";export default async function CreateCourse(d,e,f){var g=(await b.jsonFetcher("/course/".concat(d),a.postJsonRequest(e,await a.authRequest(f)))).data;return a.responseParser(g,c)}
//# sourceMappingURL=create_course.js.map