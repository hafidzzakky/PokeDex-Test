import {combineReducers} from 'redux';
import AllPokemonReducer from './AllPokemonReducer';
import DetailPokemonReducer from './DetailPokemonReducer';
export default combineReducers({
    AllPokemon    : AllPokemonReducer,
    DetailPokemon : DetailPokemonReducer 
})