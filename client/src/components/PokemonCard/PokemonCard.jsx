import React from "react";
import "./PokemonCard.css";




const PokemonCard = (props) => {
    //console.log(props)
    return (
        
        <div className="pokecard" key={props.id}>
                {props.id <= 1154 ? <span className="id">#{props.id}</span> : <span className="id">#DB</span>}
                <img key={props.id} src={props.img} className="img" alt={props.name}/>
                <h3 className="name">{props.name}</h3>
                <div className="types">
                    {props.types?.map(t => {return <img key={t.id} src={`media/types/${t.name}.svg.png`} className="type" alt={t.name}/>})}
                </div>
            </div>   
       
        
    )
}

export default PokemonCard;