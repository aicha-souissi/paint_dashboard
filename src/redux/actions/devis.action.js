import { get } from "../../utils/apiHelpers"
import { GET_DEVIS, GET_DEVIS_SUCCESS } from "../const/actionTypes"

export const getDevis = () => {

    return {
        type: GET_DEVIS
    }
}

export const getDevisSuccess = (data) => {
    return {
        type: GET_DEVIS_SUCCESS,
        payload: data
    }
}

export const getDevisApi = () => async dispatch => {
    try {
        dispatch(getDevis())
        let result = await get('devis');
        console.log("RESULT", result);
        dispatch(getDevisSuccess(result.result))
    } catch (error) {

    }
}