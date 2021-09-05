import { GET_DEVIS, GET_DEVIS_SUCCESS } from "../const/actionTypes";

const devisInitState = {
    loading: false,
    list: []
}

const devisReducer = (state = devisInitState, action) => {
    let { type, payload } = action;
    switch (type) {
        case GET_DEVIS:
            return { ...state, loading: true }
        case GET_DEVIS_SUCCESS:
            return { ...state, loading: false, list: payload }
        default:
            return state;
    }

}

export default devisReducer;