export default class SDKResponseException<Extra = null> extends Error {
  extra?: Extra;

  constructor(message: string, extra?: Extra) {
    super(message);
    this.extra = extra;
  }
}
