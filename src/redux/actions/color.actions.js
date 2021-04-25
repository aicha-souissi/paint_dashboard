import { get, post, remove, update } from "../../utils/apiHelpers";
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

export const addColor = () => {
  return {
    type: ADD_COLOR,
  };
};

export const addColorSuccess = () => {
  return { type: ADD_COLOR_SUCCESS };
};

export const getColors = () => {
  return {
    type: GET_ALL_COLORS,
  };
};

export const getColorsSuccess = (data) => {
  return {
    type: GET_ALL_COLORS_SUCCESS,
    payload: data,
  };
};
export const getAllColosApi = () => async (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch(getColors());
  try {
    let config = {
      headers: {
        access_token: token,
      },
    };
    let result = await get("color/colorlist", config);
    dispatch(getColorsSuccess(result.message));
  } catch (err) {
    console.log(err);
  }
};
export const addColorApi = (data) => async (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch(addColor());
  let config = {
    headers: {
      access_token: token,
    },
  };
  try {
    let result = await post("color/addcolor", data, config);
    dispatch(getAllColosApi());
    console.log(result);
  } catch (error) {}
};

export const deleteColor = () => {
  return {
    type: DELETE_COLOR,
  };
};

export const deleteColorSuccess = () => {
  return {
    type: DELETE_COLOR_SUCCESS,
  };
};

export const deleteColorApi = (id) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      access_token: token,
    },
  };
  dispatch(deleteColor());
  try {
    let result = await remove(`color/deletecolor/${id}`, config);

    dispatch(deleteColorSuccess());
    dispatch(getAllColosApi());
  } catch (error) {}
};

export const updateColor = () => {
  return {
    type: UPDATE_COLOR,
  };
};
export const updateColorSuccess = () => {
  return {
    type: UPDATE_COLOR_SUCCESS,
  };
};

export const updateColorApi = (id, data) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let config = {
    headers: {
      access_token: token,
    },
  };
  dispatch(updateColor());
  try {
    let result = await update(`color/updatecolor/${id}`, data, config);
    if (result.success) {
      dispatch(updateColorSuccess());
      dispatch(getAllColosApi());
    }
  } catch (error) {}
};
