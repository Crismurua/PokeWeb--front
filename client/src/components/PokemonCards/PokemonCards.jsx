import React from "react";
import * as actions from "../../redux/actions/index.js";
import { useSelector } from "react-redux";
import PokemonCard from "../PokemonCard/PokemonCard.jsx"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import OrderBar from "../OrderBar/OrderBar.jsx";
import FilterBar from "../FilterBar/FilterBar.jsx";

import "./PokemonCards.css";

import pikachu from "../../media/pikachu_running.gif";
import pokecards from "../../media/pokemon-cards.png";
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
        
   


    
        return (
        <div >
            <FilterBar />
            <OrderBar />  
            <img src={pokecards} clasName="pokecards" alt="PokeCards"/>
            <Pagination />

            <div  className="cards">
            { 

                loading ? <img src={pikachu} className="pikachu" alt="Loading..."/> : pokemons?.map(p => {
                    //console.log(p)
                    return (
                        <Link to={`/pokemons/${p.id}`} key={p.id}>
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
            <Pagination />
        </div>
        );
    }



  
  export default PokemonCards;
  