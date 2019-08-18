import {
    GET_DETAIL_POKEMON,
    GET_DETAIL_POKEMON_SUCCESS,
    GET_DETAIL_POKEMON_FAIL,
    GET_SPECIES_POKEMON,
    GET_SPECIES_POKEMON_SUCCESS,
    GET_SPECIES_POKEMON_FAIL,
    FILTER_POKEMON
} from '../Actions/Types';

const INITIAL_STATE = {
    data: [],
    dataSpecies : [],
    loadingDataSpecies: false,
    errorDataSpecies: '',
    filteredPokemon:[],
    typePokemon:[],
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_DETAIL_POKEMON:
            return { ...state, error: '', data:[...state.data], filteredPokemon: [...state.filteredPokemon], loading: true };
        case GET_DETAIL_POKEMON_SUCCESS:
            return { ...state, data: [...state.data, action.payload], filteredPokemon: [...state.data, action.payload], loading: false};
        case GET_DETAIL_POKEMON_FAIL:
            return { ...state, data:[...state.data], filteredPokemon: [...state.filteredPokemon], error: 'Terjadi Kesalahan Sistem', loading: false};
        case GET_SPECIES_POKEMON:
            return { ...state, error: '', loadingDataSpecies: true};
        case GET_SPECIES_POKEMON_SUCCESS:
            return { ...state, dataSpecies: action.payload, error: '', loadingDataSpecies: false};
        case GET_SPECIES_POKEMON_FAIL:
            return { ...state, errorDataSpecies: 'Terjadi Kesalahan Sistem', loadingDataSpecies: false};
        case FILTER_POKEMON:
            return { ...state, filteredPokemon:action.payload.data, typePokemon:action.payload.typePokemon, loading: false};
        default:
            return state;
    }
};