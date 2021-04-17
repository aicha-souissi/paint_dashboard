import { post } from "../../utils/apiHelpers";
import { USER_LOGIN, USER_LOGIN_SUCCESS } from "../const/actionTypes";
const loginUser = () => {
  return {
    type: USER_LOGIN,
  };
};
const loginUserSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};
export const loginUserApi = (data) => async (dispatch) => {
  dispatch(loginUser);
  let userData = await post("users/login", data);
  if(userData)
  { 
    dispatch(loginUserSuccess(userData));
  }else 
  {
      alert("mot de passe ghalet")
  }
  
};
