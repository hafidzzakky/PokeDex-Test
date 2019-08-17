import {
    GET_DETAIL_POKEMON,
    GET_DETAIL_POKEMON_SUCCESS,
    GET_DETAIL_POKEMON_FAIL
} from '../Actions/Types';

const INITIAL_STATE = {
    data: [],
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_DETAIL_POKEMON:
            return { ...state, error: '', loading: true };
        case GET_DETAIL_POKEMON_SUCCESS:
            return { ...state, ...INITIAL_STATE, data: state.data.concat(action.payload), loading: false};
        case GET_DETAIL_POKEMON_FAIL:
            return { ...state, error: 'Terjadi Kesalahan Sistem', loading: false};
        default:
            return state;
    }
};