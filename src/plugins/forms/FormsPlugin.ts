import Form from "./Form";
import { inject, injectable } from "inversify";
import { VueConstructor } from "vue/types/vue";

@injectable()
class Forms {
  @inject("$validator") private _validator;

  public install(Vue: VueConstructor) {
    Vue.mixin({
      methods: {
        createForm: (data: object) => {
          return new Form(data, this._validator);
        }
      }
    });
  }
}

export default Forms;
