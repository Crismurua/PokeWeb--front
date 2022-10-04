import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/actions/index.js";


const PokemonDetail = (props) => {
    const params = useParams(props) 
  
    const dispatch = useDispatch()
  
    const detail = useSelector(state => state.pokemonDetail)
    const loading = useSelector(state => state.loading)

  
    React.useEffect(() => {
      dispatch(actions.getPokemonDetail(params.id));
  
    }, [params.id, dispatch])

    return (

        loading ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" alt="Loading..."/> : 
            
            <div key={detail.id}>
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
                        return <li key={t.id}>{t.name}</li>
                    })}
                </ul>

            </div>
    );


};

export default PokemonDetail;