import { AuthState } from "./stateInterface";
import AuthService from "@app/services/AuthService";

export default function(authService: AuthService) {
  return {
    SET_AUTH_USER: (state: AuthState, user) => {
      authService.setUser(state, user);
    },
    SET_AUTH_RESPONSE: (state: AuthState) => {
      authService.setAuthResponse(state);
    },
    REMOVE_AUTH: (state: AuthState) => {
      authService.logout(state);
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
