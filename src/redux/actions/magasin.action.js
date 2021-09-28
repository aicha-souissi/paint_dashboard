import { get, post, remove } from "../../utils/apiHelpers"
import { GET_ALL_MAGASIN, GET_ALL_MAGASIN_SUCCESS } from "../const/actionTypes"
import Swal from "sweetalert2"
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
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Une erreur est surevnu',
           
              })
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
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Une erreur est surevnu',
           
              })
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
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Une erreur est surevnu',
           
              })
        }
    } catch (error) {

    }
}