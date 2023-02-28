import * as types from "./ActionType";
import axios from "axios";
export const loginReq = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://curious-deer-shift.cyclic.app/user/api/login", params)
    .then((res) => dispatch({ type: types.LOGIN_SUCCESS, payload: res.data }))
    .catch((er) => dispatch({ type: types.LOGIN_FAILED }));
};

export const signupReq = (params) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post("https://curious-deer-shift.cyclic.app/user/api/signup", params)
    .then((res) => dispatch({ type: types.LOGIN_SUCCESS, payload: res.data }))
    .catch((er) => dispatch({ type: types.SIGNUP_FAILED }));
};
