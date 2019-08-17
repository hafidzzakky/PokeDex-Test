import {
    GET_ALL_POKEMON,
    GET_ALL_POKEMON_FAIL,
    GET_ALL_POKEMON_SUCCESS,
    GET_DETAIL_POKEMON,
    GET_DETAIL_POKEMON_SUCCESS,
    GET_DETAIL_POKEMON_FAIL
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
            console.log('data all pokemon : ', data);
            dispatch(getDetailPokemon(data.results));     
        })
        .catch((error) => {
            dispatch({ type : GET_ALL_POKEMON_FAIL })
            console.log('error bang')
        });
    };
};

const getDetailPokemon = (data) => {
    return(dispatch) => {
        dispatch({ type: GET_DETAIL_POKEMON });
        console.log('data detail pokemon : ', data);
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
            console.log('data Pokemon : ', data);       
        })
        .catch((error) => {
            dispatch({ type : GET_DETAIL_POKEMON_FAIL })
            console.log('error bang')
        }));
    };
};