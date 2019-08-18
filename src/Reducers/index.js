import {combineReducers} from 'redux';
import AllPokemonReducer from './AllPokemonReducer';
import DetailPokemonReducer from './DetailPokemonReducer';
import AllTypePokemonReducer from './AllTypePokemonReducer';
export default combineReducers({
    AllPokemon      : AllPokemonReducer,
    DetailPokemon   : DetailPokemonReducer,
    AllTypePokemon  : AllTypePokemonReducer
})