import { tempState } from "./stateInterface";

export default function() {
  return {
    SAMPLE_GETTER: (state: tempState) => {
      return state;
    }
  };
}
