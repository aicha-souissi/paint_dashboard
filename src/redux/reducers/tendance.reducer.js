import {
    GET_TENDANCE,
    GET_TENDANCE_SUCCESS,
    ADD_TENDANCE,
    ADD_TENDANCE_SUCCESS,
    SEARCH_TENDANCE,
  } from "../const/actionTypes";
  
  const ProductInitState = {
    loading: false,
    list: [],
    editList:[]
  };
  
  const tendanceReducer = (state = ProductInitState, action) => {
    let { type, payload } = action;
    switch (type) {
      case GET_TENDANCE:
        return { ...state, loading: true };
      case GET_TENDANCE_SUCCESS:
        return { ...state, loading: false, list: payload,editList:payload };
      case ADD_TENDANCE:
        return { ...state, loading: true };
      case ADD_TENDANCE_SUCCESS:
        return { ...state, loading: false };
      case SEARCH_TENDANCE:
        if (payload !== "") {
          let newList = state.editList.filter((elm) => elm.nameColor.includes(payload));
          return { ...state, list: newList };
        } else {
          return { ...state, list: state.editList };
        }
  
      default:
        return state;
    }
  };
  
  export default tendanceReducer ; 