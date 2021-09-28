import { get, post, remove, update } from "../../utils/apiHelpers";
import {
  ADD_COLOR,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  SEARCH_PRODUCT,
} from "../const/actionTypes";
import Swal from "sweetalert2";
export const addProduct = () => {
  return {
    type: ADD_PRODUCT,
  };
};

export const addProductSuccess = () => {
  return {
    type: ADD_PRODUCT_SUCCESS,
  };
};
export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};

export const addProductApi = (data) => async (dispatch) => {
  dispatch(addProduct());
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      access_token: token,
    },
  };
  try {
    let result = await post("produit/addproduit", data, config);
    if (result.success) {
      dispatch(addProductSuccess());
      dispatch(getProductsApi());
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Une erreur est surevnu",
      });
    }
  } catch (error) {}
};
export const updateProductApi = (id, data) => async (dispatch) => {
  dispatch(addProduct());
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      access_token: token,
    },
  };
  try {
    let result = await post("produit/updateproduit/" + id, data, config);
    if (result.success) {
      dispatch(addProductSuccess());
      dispatch(getProductsApi());
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Une erreur est surevnu",
      });
    }
  } catch (error) {}
};
export const getProductsApi = () => async (dispatch) => {
  dispatch(getProducts());
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      access_token: token,
    },
  };
  try {
    let result = await get("produit/produitlist", config);
    if (result.success) {
      dispatch(getProductsSuccess(result.message));
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Une erreur est surevnu",
      });
    }
  } catch (error) {}
};

export const deleteProduct = (id) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      access_token: token,
    },
  };
  try {
    let result = await remove("produit/deleteproduit/" + id, config);
    if (result.success) {
      dispatch(getProductsApi());
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Une erreur est surevnu",
      });
    }
  } catch (error) {}
};

export const searchProduct = (data) => {
  return { type: SEARCH_PRODUCT, payload: data };
};
