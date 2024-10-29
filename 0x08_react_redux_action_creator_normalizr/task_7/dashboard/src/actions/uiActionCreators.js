import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";
import { bindActionCreators } from "redux";

export function login(email, password) {
  return {
    type: LOGIN,
    payload: { user: { email, password } },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}
export const boundLogin = (email, password) => (dispatch) =>
  bindActionCreators(login, dispatch)({ email, password });

export const boundLogout = () => (dispatch) =>
  bindActionCreators(logout, dispatch)();

export const boundDisplayNotificationDrawer = () => (dispatch) =>
  bindActionCreators(displayNotificationDrawer, dispatch)();

export const boundHideNotificationDrawer = () => (dispatch) =>
  bindActionCreators(hideNotificationDrawer, dispatch)();
