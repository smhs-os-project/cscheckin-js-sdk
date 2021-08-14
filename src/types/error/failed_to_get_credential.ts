export default class FailedToGetCredential extends Error {
  constructor() {
    super("Failed to get the credential header to request.");
    this.name = "FailedToGetCredential";
  }
}
