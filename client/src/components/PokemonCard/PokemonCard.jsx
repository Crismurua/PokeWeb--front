import React from "react";
import {Link} from "react-router-dom";


const PokemonCard = (props) => {
    console.log(props)
    return (
        <Link to={`/pokemons/${props.id}`}>
             <div className="card" key={props.id}>
                <h3>{props.name}</h3>
                <img src={props.img} alt={props.name}/>
                <ul>
                    {props.types?.map(t => {return <li>{t.name}</li>})}
                </ul>
            </div>   
        </Link>
        
    )
}

export default PokemonCard;