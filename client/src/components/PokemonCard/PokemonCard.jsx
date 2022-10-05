import React from "react";
import "./PokemonCard.css";


const PokemonCard = (props) => {
    //console.log(props)
    return (
        
        <div className="pokecard" key={props.id}>
                {props.id <= 1154 ? <span>#{props.id}</span> : <span>#DB</span>}
                <img src={props.img} className="img" alt={props.name}/>
                <h3 className="name">{props.name}</h3>
                <ul className="types">
                    {props.types?.map(t => {return <li key={t.id}>{t.name}</li>})}
                </ul>
            </div>   
       
        
    )
}

export default PokemonCard;