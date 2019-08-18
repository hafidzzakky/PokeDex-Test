import {
    GET_ALL_TYPE_POKEMON,
    GET_ALL_TYPE_POKEMON_SUCCESS,
    GET_ALL_TYPE_POKEMON_FAIL
} from '../Actions/Types';

const INITIAL_STATE = {
    data: [],
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_ALL_TYPE_POKEMON:
            return { ...state, data: [...state.data], error: '', loading: true};
        case GET_ALL_TYPE_POKEMON_SUCCESS:
            return { ...state, data: action.payload, loading: false};
        case GET_ALL_TYPE_POKEMON_FAIL:
            return { ...state, error: 'Terjadi Kesalahan Sistem', loading: false};
        default:
            return state;
    }
};