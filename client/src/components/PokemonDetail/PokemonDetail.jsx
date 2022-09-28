import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/actions/index.js";
import {Types} from "../Types/Types.jsx";

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
                <li>DMG: {detail.attack}</li>
                <li>DEF: {detail.defense}</li>
                <li>SPD: {detail.speed}</li>
            </ul>
            <p>Height: {detail.height} KG</p>
            <p>Weight: {detail.height} KG</p>
            <h4>Types</h4>
            <Types />

        </div>
    );


};

export default PokemonDetail;