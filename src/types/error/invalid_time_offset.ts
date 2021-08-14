export default class InvalidTimeOffset extends Error {
  constructor(public offset: string) {
    super(`The time offset is in the invalid format: ${offset}`);
    this.name = "InvalidTimeOffset";
  }
}
