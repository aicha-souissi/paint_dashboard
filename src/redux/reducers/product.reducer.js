import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
} from "../const/actionTypes";

const ProductInitState = {
  loading: false,
  list: [],
};

const productReducer = (state = ProductInitState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, list: payload };
    case ADD_PRODUCT:
      return { ...state, loading: true };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default productReducer ; 