//ACTION TYPES
import {GET_POKEMONS, GET_POKEMON_DETAIL, GET_TYPES, CREATE_POKEMON} from "../actions/actionTypes.js";


export const getPokemons = () => {
    return function(dispatch){
        return fetch('http://localhost:3001/pokemons')
        .then(r => r.json())
        .then(response => {
            dispatch({
                type: GET_POKEMONS,
                payload: response
            })
        })
    }
};

export const getPokemonDetail = (id) => {
    return function(dispatch){
        return fetch(`http://localhost:3001/pokemons/${id}`)
        .then(r => r.json())
        .then(response => {
            dispatch({
                type: GET_POKEMON_DETAIL,
                payload: response
            })
        })
    }
}

export const createPokemon = (payload) => {
    return function(dispatch){
        return fetch('http://localhost:3001/pokemons', {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(payload),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => {
            dispatch({
                    type: CREATE_POKEMON,
                    payload: response                
            })
        })
    }
    
}

export const getTypes = () => {
    return function(dispatch){
        return fetch('http://localhost:3001/type')
        .then(r => r.json())
        .then(response => {
            dispatch({
                    type: GET_TYPES,
                    payload:  response
                
            })
        })
    }
}