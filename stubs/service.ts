import { injectable, inject } from "inversify";
import ConfigInterface from "varie/lib/config/ConfigInterface";

@injectable()
export default class BroadcastService {
  protected configService: ConfigInterface;

  constructor(@inject("ConfigService") configService) {
    this.configService = configService;
  }
}
