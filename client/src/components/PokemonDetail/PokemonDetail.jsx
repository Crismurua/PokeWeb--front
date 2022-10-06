import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/actions/index.js";
import "./PokemonDetail.css";



const PokemonDetail = (props) => {
    const params = useParams(props) 
  
    const dispatch = useDispatch()
  
    const detail = useSelector(state => state.pokemonDetail)
    const loading = useSelector(state => state.loading)

  
    React.useEffect(() => {
      dispatch(actions.getPokemonDetail(params.id));
  
    }, [params.id, dispatch])



    return (

        loading ? <img src="media/pikachu_running.gif" className="loading" alt="Loading..."/> : 
        !detail ?  <img src="media/psyduck.gif" className="psyduck" alt="NotFound..."/> :
            
            <div className="main-detail" key={detail.id}>
                {detail.id <= 1154 ? <span className="id">#{detail.id}</span> : <span className="id">#DB</span>}
                <h2 className="name-detail">{detail.name}</h2>
                <img className="img-detail" src={detail.img} alt={detail.name}/>
                <div className="stats">
                
                <ul>
                    <li>HP: {detail.hp}</li>
                    <li>ATK: {detail.attack}</li>
                    <li>DEF: {detail.defense}</li>
                    <li>SPD: {detail.speed}</li>
                </ul>
                <p>Height: {detail.height} Dm</p>
                <p>Weight: {detail.height} Hg</p>
                </div>
                <div className="typesdetail">                
                    {detail.types?.map(t => {
                        return <div className="typedetail">
                                <img src={`/media/types/${t.name}.svg.png`} className="type" key={t.id} alt={t.name}/>
                                <span>{t.name}</span>
                                </div>
                                
                    })}
                </div>

            </div>
    );


};

export default PokemonDetail;