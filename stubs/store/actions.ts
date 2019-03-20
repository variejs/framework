import { ActionContext } from "vuex";
import RootState from "@store/rootState";
import { tempState } from "./stateInterface";

export default function(httpService) {
  return {
    sampleAction: (context: ActionContext<tempState, RootState>, data) => {
      return httpService.post("/some-url", {
        data
      });
    }
  };
}
