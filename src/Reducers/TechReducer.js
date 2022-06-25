import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from "../Actions/Types";

const initalState = {
    techs: null,
    loading: false,
    error:null
};

export default (state = initalState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading:false
            }
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading:false
            }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case TECHS_ERROR:
            console.log(action.payload);
            return {
                ...state,
                error: action.payload,
                loading:false
            }
        default:
            return state;
    }
}