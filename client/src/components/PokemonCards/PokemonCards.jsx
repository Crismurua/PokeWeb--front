import React from "react";
import * as actions from "../../redux/actions/index.js";
import { useSelector } from "react-redux";
import PokemonCard from "../PokemonCard/PokemonCard.jsx"
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import OrderBar from "../OrderBar/OrderBar.jsx";
import FilterBar from "../FilterBar/FilterBar.jsx";

import pikachu from "../../media/pikachu_running.gif";

export function PokemonCards(){
    
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    const loading = useSelector(state => state.loading)
    

    React.useEffect(() => {
        dispatch(actions.getPokemons())

    }, [dispatch])

     



    
        return (
        <div>
            <h3>Pokemons</h3>
            <FilterBar />
            <OrderBar />  
            { 

                loading ? <img src={pikachu} alt="Loading..."/> : pokemons?.map(p => {
                    //console.log(p)
                    return (
                        <Link to={`/pokemons/${p.id}`} key={p.id}>
                        <PokemonCard key={p.id}
                                id={p.id}
                                name={p.name}
                                img={p.img}
                                types={p.types}
                        />
                        </Link>
                    )
                })
            }
        </div>
        );
    }



  
  export default PokemonCards;
  