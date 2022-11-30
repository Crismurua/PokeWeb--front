import {GET_POKEMONS, GET_POKEMON_DETAIL, GET_TYPES, GET_BY_NAME, CREATE_POKEMON, LOADING, FILTER_TYPE, FILTER_POKEMON, SORT_NAME , SORT_ATTACK, ASCENDENT, DESCENDENT, DEFAULT, API_POKEMON, DB_POKEMON, ALL_TYPES, NEXT, PREV, ALL_POKEMON, RESET} from "../actions/actionTypes.js";


const initialState = {
    pokemons: [],
    searchedPoke: {},
    pokemonDetail: {},
    types: [],
    loading: false,
    filteredPoke:[],
    orderPokemons:[],
    filterTypes: false,
    filterPokemons: false,
    sortName:[false, false],
    sortAttack:[false, false],
    currentPage: 1,
    pokePerPage: 12,
    
};

const rootReducer = (state = initialState, action) => {

    function pokeFilter(byType, byPokemon){
        let currState = [...state.pokemons];
        
        if(byType !== ALL_TYPES){
            currState = currState.filter(p => {

                const allTypes = p.types.map(t => t.name);
                return allTypes.includes(byType);
            })
        }        
 
        if(byPokemon === API_POKEMON){

            currState = currState.filter(p => !isNaN(p.id))

        }
        if(byPokemon === DB_POKEMON){
            
            currState = currState.filter(p => isNaN(p.id))
        }
        if(byPokemon === ALL_POKEMON) {
            currState = state.pokemons
        }
    
        return currState;
    }
    
    switch (action.type) {

        case GET_POKEMONS:
            console.log(3)
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                currentPage:1,
                
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case GET_BY_NAME:
            
            return {
                ...state,
                searchedPoke: [action.payload],
                loading: false,
                currentPage: 1,
                
            }
        case GET_POKEMON_DETAIL:
            return {
                ...state,
                pokemonDetail: action.payload,
                loading: false,
                currentPage: 1,
                
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
                let filtered = pokeFilter(action.payload, action.payload);
                return {
                    ...state,
                    filteredPoke: filtered,
                    filterTypes: action.payload,
                    filterPokemons: action.payload,
                    currentPage: 1
            }}
        case FILTER_POKEMON:{
            let filtered = pokeFilter(action.payload, action.payload);
            return {
                ...state,
                filteredPoke: filtered,
                filterPokemons: action.payload,
                filterTypes: action.payload,
                currentPage: 1

            }}
        case SORT_NAME:
            {let sortedPoke = action.payload[1]
                
                sortedPoke.sort((a,b) => {
                    if (a.name < b.name) {  return action.payload[0] === ASCENDENT ? -1 : 1; }
                    if (a.name > b.name) {  return action.payload[0] === DESCENDENT ? -1 : 1;}
                    if(a.id > b.id) {return action.payload === DEFAULT ? -1 : 1; }
                    return 0;
                })
                console.log(action.payload)
            return {
                ...state,
                orderPokemons: sortedPoke,
                filteredPoke: sortedPoke,
                sortName: [action.payload === ASCENDENT, action.payload === DESCENDENT, action.payload === DEFAULT],
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
                    orderPokemons: sortedPoke,
                    filteredPoke: sortedPoke,
                    sortAttack: [action.payload === ASCENDENT, action.payload === DESCENDENT, action.payload === DEFAULT],
                    sortName: [false, false],
                    currentPage: 1
                }}

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
        case RESET:
            return {
                ...state,
                filteredPoke: [],
                orderPokemons: [],
                searchedPoke: [],
            }
        
        default:
            return state

    }
};

export default rootReducer;
