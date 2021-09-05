import { get, post } from "../../utils/apiHelpers";
import {
    ADD_COLOR,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_TENDANCE,
    ADD_TENDANCE_SUCCESS,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_TENDANCE,
    GET_TENDANCE_SUCCESS,
} from "../const/actionTypes";

export const addTendance = () => {
    return {
        type: ADD_TENDANCE,
    };
};

export const addTendanceSuccess = () => {
    return {
        type: ADD_TENDANCE_SUCCESS,
    };
};
export const getTendances = () => {
    return {
        type: GET_TENDANCE,
    };
};

export const getTendancesSuccess = (data) => {
    return {
        type: GET_TENDANCE_SUCCESS,
        payload: data,
    };
};

export const addTendanceApi = (data) => async (dispatch) => {
    dispatch(addTendance());
    let token = localStorage.getItem("token");
    let config = {
        headers: {
            access_token: token,
        },
    };
    try {
        let result = await post("tendance/addtendance", data, config);
        if (result.success) {
            dispatch(addTendanceSuccess());
            dispatch(getTendancesApi());
        }
    } catch (error) { }
};
export const getTendancesApi = () => async (dispatch) => {
    dispatch(getTendances());
    let token = localStorage.getItem("token");
    let config = {
        headers: {
            access_token: token,
        },
    };
    try {
        let result = await get("tendance/", config);
        if (result.success) {
            dispatch(getTendancesSuccess(result.result));
        }
    } catch (error) { }
};
