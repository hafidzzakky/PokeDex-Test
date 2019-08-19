import {
    GET_ALL_POKEMON,
    GET_ALL_POKEMON_FAIL,
    GET_ALL_POKEMON_SUCCESS,
    GET_DETAIL_POKEMON,
    GET_DETAIL_POKEMON_SUCCESS,
    GET_DETAIL_POKEMON_FAIL,
    GET_ALL_TYPE_POKEMON,
    GET_ALL_TYPE_POKEMON_SUCCESS,
    GET_ALL_TYPE_POKEMON_FAIL,
    GET_SPECIES_POKEMON,
    GET_SPECIES_POKEMON_SUCCESS,
    GET_SPECIES_POKEMON_FAIL,
    GET_INFO_POKEMON,
    GET_INFO_POKEMON_SUCCESS,
    GET_INFO_POKEMON_FAIL,
    FILTER_POKEMON
} from './Types';

const baselink = 'https://pokeapi.co/api/v2/';

export const getAllPokemon = (resultIndex, resultPerPage) => {
    return(dispatch) => {
        dispatch({ type: GET_ALL_POKEMON });
        //post method
        fetch(`${baselink}pokemon/?offset=${resultIndex}&limit=${resultPerPage}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then(response => response.json())
        .then((data) => {
            dispatch({ type: GET_ALL_POKEMON_SUCCESS, payload: data.results });
            dispatch(getDetailPokemon(data.results));     
        })
        .catch((error) => {
            dispatch({ type : GET_ALL_POKEMON_FAIL })
            console.log('error get all pokemon')
        });
    };
};

const getDetailPokemon = (data) => {
    return(dispatch) => {
        dispatch({ type: GET_DETAIL_POKEMON });
        //post method
        data.map( x => fetch(`${baselink}pokemon/${x.name}`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then(response => response.json())
        .then((data) => {
            dispatch({ type: GET_DETAIL_POKEMON_SUCCESS, payload: data });
        })
        .catch((error) => {
            dispatch({ type : GET_DETAIL_POKEMON_FAIL })
            console.log('error get detail pokemon')
        }));
    };
};

const getSpeciesByName = (pokemonName) => {
    return(dispatch) => {
        dispatch({ type: GET_SPECIES_POKEMON });
        //post method
        fetch(`${baselink}pokemon-species/${pokemonName}/`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then(response => response.json())
        .then((data) => {
            dispatch({ type: GET_SPECIES_POKEMON_SUCCESS, payload: data });
            console.log(data)
        })
        .catch((error) => {
            dispatch({ type : GET_SPECIES_POKEMON_FAIL })
            console.log('Error Get Data Type  Pokemon')
        });
    };
}

export const getInfoPokemonByName = (pokemonName) => {
    return(dispatch) => {
        dispatch({ type: GET_INFO_POKEMON });
        //post method
        fetch(`${baselink}pokemon-species/${pokemonName}/`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then(response => response.json())
        .then((data) => {
            dispatch({ type: GET_INFO_POKEMON_SUCCESS, payload: data });
            dispatch(getSpeciesByName(data.name));  
        })
        .catch((error) => {
            dispatch({ type : GET_INFO_POKEMON_FAIL })
            console.log('Error Get Data Info  Pokemon')
        });
    };
}


export const getAllTypes = () => {
    return(dispatch) => {
        dispatch({ type: GET_ALL_TYPE_POKEMON });
        //post method
        fetch(`${baselink}type/`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        .then(response => response.json())
        .then((data) => {
            dispatch({ type: GET_ALL_TYPE_POKEMON_SUCCESS, payload: data.results });
        })
        .catch((error) => {
            dispatch({ type : GET_ALL_TYPE_POKEMON_FAIL })
            console.log('Error Get Data Type  Pokemon')
        });
    };
}

export const filterPokemonByTypes = (pokemon, typePokemon) => {
    return(dispatch) => {
        dispatch({ 
            type: FILTER_POKEMON, 
            payload: {
                typePokemon : typePokemon,
                data : typePokemon === 'All' ? pokemon : pokemon.filter(item =>
                    item.types.some(type => typePokemon === type.type.name)
                ) 
            }
        });
    };
}