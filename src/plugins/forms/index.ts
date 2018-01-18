import Form from "./Form";
import { VueConstructor } from "vue/types/vue";

class Forms {
  public install(Vue: VueConstructor) {
    Vue.mixin({
      methods: {
        createForm: (data: object) => {
          return new Form(data);
        }
      }
    });
  }
}

export default Forms;
