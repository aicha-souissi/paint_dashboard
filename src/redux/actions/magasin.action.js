import { get, post, remove } from "../../utils/apiHelpers"
import { GET_ALL_MAGASIN, GET_ALL_MAGASIN_SUCCESS } from "../const/actionTypes"

export const getAllMagasin = () => {

    return {
        type: GET_ALL_MAGASIN
    }
}

export const getAllMagasinSuccess = (data) => {
    return {
        type: GET_ALL_MAGASIN_SUCCESS,
        payload: data
    }
}

export const getAllMagasinApi = () => async dispatch => {
    let token = localStorage.getItem("token");
    let config = {
        headers: {
            access_token: token,
        },
    };
    try {
        let result = await get("magasins/", config);
        if (result.success) {
            console.log("RESULT", result)
            dispatch(getAllMagasinSuccess(result.message))
        }
    } catch (e) {

    }
}

export const addNewMagasin = (data) => async dispatch => {
    try {
        let token = localStorage.getItem("token");
        let config = {
            headers: {
                access_token: token,
            },
        };
        let result = await post('magasins/add', data, config)
        if (result.success) {
            dispatch(getAllMagasinApi());
        }
    } catch (error) {

    }
}
export const deleteMagasinApi = (id) => async dispatch => {
    try {
        let token = localStorage.getItem("token");
        let config = {
            headers: {
                access_token: token,
            },
        };
        let result = await remove('magasins/delete/' + id, config)
        if (result.success) {
            dispatch(getAllMagasinApi());
        }
    } catch (error) {

    }
}