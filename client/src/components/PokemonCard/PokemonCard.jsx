import React from "react";



const PokemonCard = (props) => {
    //console.log(props)
    return (
        
        <div className="card" key={props.id}>
                <span>{props.id}</span>
                <h3>{props.name}</h3>
                <img src={props.img} alt={props.name}/>
                <ul>
                    {props.types?.map(t => {return <li key={t.id}>{t.name}</li>})}
                </ul>
            </div>   
       
        
    )
}

export default PokemonCard;