export default interface StateServiceInterface {
  getStore(): any;
  registerStore(store: any): any;
}
