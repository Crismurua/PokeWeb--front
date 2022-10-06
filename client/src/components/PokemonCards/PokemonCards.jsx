import React from "react";
import * as actions from "../../redux/actions/index.js";
import { useSelector } from "react-redux";
import PokemonCard from "../PokemonCard/PokemonCard.jsx"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import OrderBar from "../OrderBar/OrderBar.jsx";
import FilterBar from "../FilterBar/FilterBar.jsx";
import { getPokemons } from "../../redux/actions";
import "./PokemonCards.css";


import Pagination from "../Pagination/Pagination.jsx";

export function PokemonCards(){
    
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    const loading = useSelector(state => state.loading)
    
    const currentPage = parseInt(useSelector(state => state.currentPage))
   
    const pokePerPage = parseInt(useSelector(state => state.pokePerPage))

    React.useEffect(() => {
        dispatch(actions.getPokemons())

    }, [dispatch])


        let start = (currentPage - 1) * pokePerPage;
        let end = start + pokePerPage;
        if (end > pokemons) end = pokemons;
        if (start < 0) start = 0;

        const handleReset = e => {
            dispatch(getPokemons())
        }
        
   


    
        return (
        <div >
            <div className="filter-order">
                <FilterBar />
                <button  onClick={handleReset} className="button-reset">RESET</button>
                <OrderBar /> 
            </div>
            <div className="header">
            <img src="media/pokemon-cards.png" className="pokecards" alt="PokeCards"/>
            <Pagination />    
            </div> 

            <div  className="cards">
            { 
                
                loading ? <div className="loading"><img src="/media/pikachu_running.gif" alt="Loading..."/></div> : 
                pokemons.length === 0 ? <div  className="psyduck">
                    <h3 className="notfound-text">Ops! Something happend!</h3>
                    <img src="/media/psyduck.gif" alt="NotFound..."/>
                    
                    </div> : 
                pokemons.map(p => {
                    //console.log(p)
                    return (
                        <Link to={`/pokemons/${p.id}`} className="link" key={p.id}>
                                <PokemonCard className="card" key={p.id}
                                    id={p.id}
                                    name={p.name}
                                    img={p.img}
                                    types={p.types}
                                />
                        </Link>
                    )
                }).slice(start, end)
            }
            </div>
            <div className="footer">
            <Pagination />

            </div>
        </div>
        );
    }



  
  export default PokemonCards;
  