/**
 * The error thrown by API.
 */
export default class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "APIError";
  }
}
