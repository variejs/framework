import ConfigInterface from "./config/ConfigInterface";
import ApplicationInterface from "./foundation/ApplicationInterface";
declare global  {
    const $config: ConfigInterface;
    const $app: ApplicationInterface;
}
