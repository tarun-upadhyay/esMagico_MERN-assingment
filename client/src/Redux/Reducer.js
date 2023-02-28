import * as types from "./ActionType";

const initState = {
  isAuth: false,
  token: null,
  user: [],
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        user: payload.user,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        isAuth: false,
        token: null,
        user: [],
      };
    default:
      return state;
  }
};
