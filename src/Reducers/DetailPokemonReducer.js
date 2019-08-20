import {
    GET_DETAIL_POKEMON,
    GET_DETAIL_POKEMON_SUCCESS,
    GET_DETAIL_POKEMON_FAIL,
    GET_SPECIES_POKEMON,
    GET_SPECIES_POKEMON_SUCCESS,
    GET_SPECIES_POKEMON_FAIL,
    GET_INFO_POKEMON,
    GET_INFO_POKEMON_SUCCESS,
    GET_INFO_POKEMON_FAIL,
    FILTER_POKEMON
} from '../Actions/Types';

const INITIAL_STATE = {
    data: [],
    dataSpecies : {
        species: {
            flavor_text_entries: [{}],
            genera: [{}]
        },
        error: '',
        loading: false
    },
    dataInfoPokemon : {
        pokemon : {
            forms: [],
            abilities: [],
            stats: [],
            moves: [],
            sprites: {},
            held_items: [],
            species: {},
            game_indices: [],
            types: []
        },
        error: '',
        loading : ''
    },
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
            return { ...state, dataSpecies: { loading: true, error: ''}};
        case GET_SPECIES_POKEMON_SUCCESS:
            return { ...state, dataSpecies: { species: action.payload, loading: false, error: ''}};
        case GET_SPECIES_POKEMON_FAIL:
            return { ...state, dataSpecies: { loading: false, error: 'Terjadi Kesalahan Pada Sistem' }};
        case GET_INFO_POKEMON:
            return { ...state, dataInfoPokemon: { loading: true, error: ''}};
        case GET_INFO_POKEMON_SUCCESS:
            return { ...state, dataInfoPokemon: { pokemon: action.payload, loading: false, error: ''}};
        case GET_INFO_POKEMON_FAIL:
            return { ...state, dataInfoPokemon: { loading: false, error: 'Terjadi Kesalahan Pada Sistem' }};
        case FILTER_POKEMON:
            return { ...state, filteredPokemon:action.payload.data, typePokemon:action.payload.typePokemon, loading: false};
        default:
            return state;
    }
};