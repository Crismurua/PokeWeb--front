import React from "react";
import {Link} from "react-router-dom";
import * as actions from "../../redux/actions/index.js";

const PokemonCard = (props) => {

    return (
        <Link to={`/pokemons/${props.id}`}>
             <div className="card" key={props.id}>
                <h3>{props.name}</h3>
                <img src={props.image} alt={props.name}/>
                <p>{props.types}</p>
            </div>   
        </Link>
        
    )
}

export default PokemonCard;