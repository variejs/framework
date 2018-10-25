import { AuthState } from "./stateInterface";

export default function() {
  return {
    SET_AUTH_USER: (state: AuthState, user) => {
      state.user = user;
    },
    REMOVE_AUTH: (state: AuthState) => {
      state.user = null;
    },
    UPDATE_AUTH_AREA_DATA: (state: AuthState, data) => {
      state.authAreaData = Object.assign(state.authAreaData, data);
    },
    RESET_AUTH_AREA_DATA: (state: AuthState) => {
      state.authAreaData = Object.assign(state.authAreaData, {
        name: null,
        email: null,
        password: null,
        confirm_password: null
      });
    }
  };
}
