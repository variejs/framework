export default interface ServiceProviderInterface {
  boot(): any;
  register?(): any;
}
