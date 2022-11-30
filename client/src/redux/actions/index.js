//ACTION TYPES

import {GET_POKEMONS, GET_POKEMON_DETAIL, GET_TYPES, GET_BY_NAME, CREATE_POKEMON, LOADING, FILTER_TYPE, FILTER_POKEMON, SORT_NAME , SORT_ATTACK, NEXT, PREV, RESET} from "../actions/actionTypes.js";


export const loading = () => {
    return {
        type: LOADING
    }
}

export const getPokemons = () => {
    return async function(dispatch){
        dispatch(loading())
        console.log(2)
        return await fetch('http://localhost:3001/pokemons')
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
    return async function(dispatch){
        dispatch(loading())
        return await fetch(`http://localhost:3001/pokemons/${id}`)
        .then(r => r.json())
        .then(response => {
            dispatch({
                type: GET_POKEMON_DETAIL,
                payload: response
            })
        })
    }
};

export const createPokemon = (payload) => {
    return async function(dispatch){
        return await fetch('http://localhost:3001/pokemons', {
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
    
};

export const getTypes = () => {
    return async function(dispatch){
        return await fetch('http://localhost:3001/type')
        .then(r => r.json())
        .then(response => {
            dispatch({
                    type: GET_TYPES,
                    payload:  response
                
            })
        })
    }
};

export const getByName = (name) => {
    //console.log(name)
    return async function(dispatch){
        dispatch(loading())
        return await fetch(`http://localhost:3001/pokemons/?name=${name}`)
        .then(r => r.json())
        .then(response => {
            dispatch({
                type: GET_BY_NAME,
                payload: response
            })
        })
    }
};

export function sortName(order){
    return async function(d, s){
        const pokemons = await s().pokemons
        return d({
            type: SORT_NAME,
            payload: [order, pokemons]
        })
    }
};

export function sortAttack(order){
    return async function(d, s){
        const pokemons = await s().pokemons
        return d({
            type: SORT_ATTACK,
            payload: [order, pokemons]
        })
    }
};

export function filterType(type){
    return {
        type: FILTER_TYPE,
        payload: type,
    }
};

export function filterPokemon(origin){
    return {
        type: FILTER_POKEMON,
        payload: origin,
    }
};

export function next(){
    return {
        type: NEXT
    }
};

export function prev(){
    return {
        type: PREV
    }
};

export function reset(){
    return {
        type: RESET
    }
};


