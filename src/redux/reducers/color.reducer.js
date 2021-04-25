import {
  ADD_COLOR,
  ADD_COLOR_SUCCESS,
  DELETE_COLOR,
  DELETE_COLOR_SUCCESS,
  GET_ALL_COLORS,
  GET_ALL_COLORS_SUCCESS,
  UPDATE_COLOR,
  UPDATE_COLOR_SUCCESS,
} from "../const/actionTypes";

const colorInitState = {
  loading: false,
  baseList: [],
  editList: [],
};

const colorReducer = (state = colorInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case ADD_COLOR:
      return { ...state, loading: true };
    case ADD_COLOR_SUCCESS:
      return { ...state, loading: false };
    case GET_ALL_COLORS:
      return { ...state, loading: true };
    case GET_ALL_COLORS_SUCCESS:
      return {
        ...state,
        baseList: payload,
        editList: payload,
        loading: false,
      };
    case DELETE_COLOR:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COLOR_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_COLOR:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_COLOR_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default colorReducer;
