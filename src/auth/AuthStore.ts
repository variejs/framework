import StoreModule from "varie/lib/state/StoreModule";
import { injectable, inject, unmanaged } from "inversify";
import ConfigInterface from "varie/src/config/ConfigInterface";

@injectable()
export default class AuthStore extends StoreModule {
    protected config: ConfigInterface;

    constructor(
        @inject("HttpService") httpService,
        @inject("ConfigService") config: ConfigInterface
    ) {
        super();
        this.config = config;

        this.setName("auth")
            .addState(this.getState())
            .addActions(this.getActions())
            .addMutations(this.getdMutations())
            .addGetters(this.getGetters());
    }

    protected getState() {
        let guards = Object.keys(this.config.get('auth.guards'));
        let state = {};

        guards.forEach(value => {
            state[value] = {
                loggedIn: false,
                user: null
            }
        })

        return state;
    }

    protected getActions() {
        return {

        }
    }

    protected getdMutations() {
        return {

        }
    }

    protected getGetters() {
        return {

        }
    }
}
