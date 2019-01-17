import * as utilities from "./utilities";
import Application from "./foundation/application";

// Core Service Providers
import HttpServiceProvider from './http/HttpServiceProvider'
import StateServiceProvider from './state/StateServiceProvider'
import ConfigServiceProvider from './config/ConfigServiceProvider'
import CookieServiceProvider from './cookies/CookieServiceProvider'
import RoutingServiceProvider from './routing/RoutingServiceProvider'
import StorageServiceProvider from './storage/StorageServiceProvider'

// Support Service Providers
import Model from './support/Model'
import ServiceProvider from './support/ServiceProvider'

// Plugin Service Providers
import FormServiceProvider from './plugins/forms/FormServiceProvider'
import AlertServiceProvider from './plugins/alerts/AlertServiceProvider'
import ValidationServiceProvider from './validation/ValidationServiceProvider'


// Auto Register Service Providers
import AutoRegisterMixinServiceProvider from './plugins/autoRegisterMixins/AutoRegisterMixinServiceProvider'
import AutoRegisterFilterServiceProvider from './plugins/autoRegisterFilters/AutoRegisterFilterServiceProvider'
import AutoRegisterLayoutServiceProvider from './plugins/autoRegisterLayouts/AutoRegisterLayoutServiceProvider'
import AutoRegisterComponentServiceProvider from './plugins/autoRegisterComponents/AutoRegisterComponentServiceProvider'
import AutoRegisterDirectiveServiceProvider from './plugins/autoRegisterDirectives/AutoRegisterDirectiveServiceProvider'

const application = new Application();
const serviceProviders = {

  // Core Service Providers
  HttpServiceProvider,
  StateServiceProvider,
  ConfigServiceProvider,
  CookieServiceProvider,
  RoutingServiceProvider,
  StorageServiceProvider,

  // Support Service Providers
  Model,
  ServiceProvider,

  // Plugin Service Providers
  FormServiceProvider,
  AlertServiceProvider,
  ValidationServiceProvider,

  // Auto Register Service Providers
  AutoRegisterMixinServiceProvider,
  AutoRegisterFilterServiceProvider,
  AutoRegisterLayoutServiceProvider,
  AutoRegisterComponentServiceProvider,
  AutoRegisterDirectiveServiceProvider,
}
export {
  utilities,
  application,
  serviceProviders
}
