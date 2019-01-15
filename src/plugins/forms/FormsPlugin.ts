import Form from "./Form";
import { inject, injectable } from "inversify";
import { VueConstructor } from "vue/types/vue";

@injectable()
class Forms {
  @inject("ValidationService") protected validateService;

  public install(Vue: VueConstructor) {
    Vue.mixin({
      methods: {
        createForm: (data: object) => {
          return new Form(data, this.validateService);
        }
      }
    });
  }
}

export default Forms;
