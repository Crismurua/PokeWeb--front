import {GET_POKEMONS, GET_POKEMON_DETAIL, GET_TYPES, GET_BY_NAME, CREATE_POKEMON, LOADING, FILTER_TYPE, FILTER_POKEMON, SORT_NAME , SORT_ATTACK, ASCENDENT, DESCENDENT, API_POKEMON, DB_POKEMON, ALL_TYPES, DEFAULT, NEXT, PREV} from "../actions/actionTypes.js";


const initialState = {
    pokemons: [],
    pokemonDetail: {},
    types: [],
    loading: false,
    filterTypes: false,
    filterPokemons: false,
    sortName:[false, false],
    sortAttack:[false, false],
    currentPage: 1,
    pokePerPage: 12
};

const rootReducer = (state = initialState, action) => {

    function pokeFilter(byType, byPokemon){
        let currState = [...state.pokemons];
        if(byType && byType !== ALL_TYPES){
            currState = currState.filter(p => {
                const allTypes = p.types.map(t => t.name);
                return allTypes.includes(byType);
            })
        };
        if(byPokemon === API_POKEMON){
            currState = currState.filter(p => p.id <= 1154)
        }
        if(byPokemon === DB_POKEMON){
            currState = currState.filter(p => isNaN(p.id))
        }
    
        return currState;
    }
    
    switch (action.type) {

        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                currentPage:1
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case GET_BY_NAME:
            
            return {
                ...state,
                pokemons: [action.payload],
                loading: false,
                currentPage: 1
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload,
                loading: false,
                currentPage: 1
            }
        case CREATE_POKEMON:
            return {
                ...state,
                pokemons: [...state.pokemons, {...action.payload}],
                currentPage: 1
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case FILTER_TYPE:
            {
                let filtered = pokeFilter(action.payload, state.filterPokemons);
                return {
                    ...state,
                    pokemons: filtered,
                    filterTypes: action.payload,
                    currentPage: 1
            }}
        case FILTER_POKEMON:{
            let filtered = pokeFilter(state.filterTypes, action.payload);
            return {
                ...state,
                pokemons: filtered,
                filterPokemons: action.payload,
                currentPage: 1

            }}
        case SORT_NAME:
            {let sortedPoke = [...state.pokemons]
            sortedPoke.sort((a,b) => {
                if (a.name.toUpperCase() < b.name.toUpperCase()) {  return action.payload === ASCENDENT ? -1 : 1; }
                if (a.name.toUpperCase() > b.name.toUpperCase()) {  return action.payload === DESCENDENT ? -1 : 1;}
                return 0;
            })
            return {
                ...state,
                pokemons: sortedPoke,
                sortName: [action.payload === ASCENDENT, action.payload === DESCENDENT],
                sortAttack: [false, false],
                currentPage: 1
            }}
        case SORT_ATTACK:
                {let sortedPoke = [...state.pokemons]
                sortedPoke.sort((a,b) => {
                    if (a.attack < b.attack) {  return action.payload === ASCENDENT ? -1 : 1; }
                    if (a.attack > b.attack) {  return action.payload === DESCENDENT ? -1 : 1;}
                    return 0;
                });
                return {
                    ...state,
                    pokemons: sortedPoke,
                    sortAttack: [action.payload === ASCENDENT, action.payload === DESCENDENT],
                    sortName: [false, false],
                    currentPage: 1
                }}
        case DEFAULT:
            return {
                ...state,
                pokemons: state.pokemons,
                sortName: [false, false],
                sortAttack: [false, false],
                loading: false,
                currentPage: 1
            }
        case NEXT:
            return {
                ...state,
                currentPage: state.currentPage + 1,
                loading: false
            }
        case PREV:
            return {
                ...state,
                currentPage: state.currentPage - 1,
                loading: false
            }
        
        default:
            return state

    }
};

export default rootReducer;
