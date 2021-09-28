import { get, post, remove } from "../../utils/apiHelpers";
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
import Swal from "sweetalert2";
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
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Une erreur est surevnu',
           
              })
        }
    } catch (error) { }
};
export const updateTendanceApi = (id, data) => async (dispatch) => {
    dispatch(addTendance());
    let token = localStorage.getItem("token");
    let config = {
        headers: {
            access_token: token,
        },
    };
    try {
        let result = await post("tendance/updatetendance/"+id, data, config);
        if (result.success) {
            dispatch(addTendanceSuccess());
            dispatch(getTendancesApi());
        }else 
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Une erreur est surevnu',
           
              })
        }
    } catch (error) { }
};

export const deleteTendanceApi = (id) => async (dispatch) => {

    let token = localStorage.getItem("token");
    let config = {
        headers: {
            access_token: token,
        },
    };
    try {
        let result = await remove("tendance/deletetendance/" + id, config);
        if (result.success) {

            dispatch(getTendancesApi());
        }else 
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Une erreur est surevnu',
           
              })
        }
    } catch (error) {
        console.log("ERROR", error);
    }
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
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Une erreur est surevnu',
           
              })
        }
    } catch (error) { }
};
