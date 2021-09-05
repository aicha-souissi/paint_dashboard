import {
    GET_TENDANCE,
    GET_TENDANCE_SUCCESS,
    ADD_TENDANCE,
    ADD_TENDANCE_SUCCESS,
  } from "../const/actionTypes";
  
  const ProductInitState = {
    loading: false,
    list: [],
  };
  
  const tendanceReducer = (state = ProductInitState, action) => {
    let { type, payload } = action;
    switch (type) {
      case GET_TENDANCE:
        return { ...state, loading: true };
      case GET_TENDANCE_SUCCESS:
        return { ...state, loading: false, list: payload };
      case ADD_TENDANCE:
        return { ...state, loading: true };
      case ADD_TENDANCE_SUCCESS:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default tendanceReducer ; 