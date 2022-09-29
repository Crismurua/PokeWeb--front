//ACTION TYPES
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_DETAIL = "GET_POKEMON_DETAIL";
export const GET_TYPES = "GET_TYPES";

export const CREATE_POKEMON = "CREATE_POKEMON";


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
    return {
        type: CREATE_POKEMON,
        payload: payload
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