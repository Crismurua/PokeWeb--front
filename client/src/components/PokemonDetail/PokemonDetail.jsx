import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/actions/index.js";


const PokemonDetail = (props) => {
    let params = useParams(props) 
    
    let dispatch = useDispatch()
  
    let detail = useSelector(state => state.pokemonDetail)
  
  
    React.useEffect(() => {
      dispatch(actions.getPokemonDetail(params.id));
  
    }, [])


    return (
        <div>
            <p>{detail.id}</p>
            <h2>{detail.name}</h2>
            <img src={detail.img} alt={detail.name}/>
            <h4>Stats</h4>
            <ul>
                <li>HP: {detail.hp}</li>
                <li>ATK: {detail.attack}</li>
                <li>DEF: {detail.defense}</li>
                <li>SPD: {detail.speed}</li>
            </ul>
            <p>Height: {detail.height} CM</p>
            <p>Weight: {detail.height} KG</p>
            <h4>Types</h4>
            <ul>
                {detail.types?.map(t => {
                    return <li>{t.name}</li>
                })}
            </ul>

        </div>
    );


};

export default PokemonDetail;