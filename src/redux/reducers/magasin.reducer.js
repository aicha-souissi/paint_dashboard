import { GET_ALL_MAGASIN, GET_ALL_MAGASIN_SUCCESS } from "../const/actionTypes";

const magasinInitState = {
    loading: false,
    list: []
}

const MagasinReducer = (state = magasinInitState, action) => {
    let { type, payload } = action;
    switch (type) {
        case GET_ALL_MAGASIN:
            return { ...state, loading: true }
        case GET_ALL_MAGASIN_SUCCESS:
            return { ...state, loading: false, list: payload }
        default:
           return state ; 
    }

}

export default MagasinReducer ; 