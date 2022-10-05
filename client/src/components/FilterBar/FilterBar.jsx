import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { filterType, filterPokemon, getTypes } from "../../redux/actions";
import { ALL_POKEMON, API_POKEMON, DB_POKEMON } from "../../redux/actions/actionTypes.js";
import "./FilterBar.css";

export default function FilterBar() {
    const types = useSelector(state => state.types);
    const filterTypes = useSelector(state => state.filterTypes);
    const filterPokemons = useSelector(state => state.filterPokemons);
    const dispatch = useDispatch();

    
    React.useEffect(() => { 
        dispatch(getTypes())    
     }, [dispatch])

    const handleTypes = e => {
        e.preventDefault();
        dispatch(filterType(e.target.value));
    }

    const handlePokemon = e => {
        e.preventDefault();
        dispatch(filterPokemon(e.target.value))
    }

    return (
        <div className="filter-container">
            <h4>FILTERS</h4>
            
            <div >
                    <select value={filterTypes} onChange={handleTypes} >
                        <option value="allTypes">ALL TYPES</option>
                        {types?.map(t => {
                            return <option key={t.id} value={t.name}>{t.name}</option>
                        })}
                    </select>
            </div>

            <div >
                    <select value={filterPokemons} onChange={handlePokemon}>
                        <option value={ALL_POKEMON} >ALL</option>
                        <option value={API_POKEMON} >API</option>
                        <option value={DB_POKEMON} >DB</option>
                    </select>
                </div>
        </div>
    )
}