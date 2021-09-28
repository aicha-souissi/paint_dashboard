import { post } from "../../utils/apiHelpers";
import { USER_LOGIN, USER_LOGIN_SUCCESS } from "../const/actionTypes";
import Swal from "sweetalert2";
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
export const loginUserApi = (data, history) => async (dispatch) => {
  dispatch(loginUser);
  let userData = await post("users/login", data);
  console.log("USER DATA",userData) ; 
  if (userData.success) {
    localStorage.setItem("token", userData.token);
    dispatch(loginUserSuccess(userData));
    history.replace('/dashboard')
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Adresse ou mot de passe incorecte!',
      
    })
  }
};
