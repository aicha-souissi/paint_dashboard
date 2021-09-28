import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  SEARCH_PRODUCT,
} from "../const/actionTypes";

const ProductInitState = {
  loading: false,
  list: [],
  editList: [],
};

const productReducer = (state = ProductInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, list: payload, editList: payload };
    case ADD_PRODUCT:
      return { ...state, loading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, loading: false };
    case SEARCH_PRODUCT:
      if (payload !== "") {
        let newList = state.editList.filter((elm) => elm.nameProduit.includes(payload));
        return { ...state, list: newList };
      } else {
        return { ...state, list: state.editList };
      }

    default:
      return state;
  }
};

export default productReducer;
