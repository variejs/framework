import { AuthState } from "./stateInterface";

export default function() {
  return {
    SAMPLE_GETTER: (state: AuthState) => {
      return state;
    }
  };
}
