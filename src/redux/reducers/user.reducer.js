import { USER_LOGIN, USER_LOGIN_SUCCESS } from "../const/actionTypes";

const userInitState = {
  token: "",
  isAuth: false,
  loading: false,
};

const UserReducer = (state = userInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
        console.log("wsol..")
      return {
        ...state,
        loading: false,
        token: payload.token,
        isAuth: true,
      };

    default:
      return state;
  }
};
export default UserReducer;
