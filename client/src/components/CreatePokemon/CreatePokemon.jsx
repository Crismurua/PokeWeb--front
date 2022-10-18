import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index.js";
import {useHistory, Link} from 'react-router-dom'
import "./CreatePokemon.css";


const CreatePokemon = () => {

  

    const initialState = {
        name: "",
        img: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        types: [],
        height: 0,
        weight: 0,
    };

    
    const dispatch = useDispatch();
    const [input, setInput] = React.useState(initialState);
    const alltypes = useSelector(state => state.types)
    const history = useHistory();
    
    const [error, setError] = React.useState({})

     React.useEffect(() => { 
        dispatch(actions.getTypes())    
     }, [dispatch])


    
    React.useEffect(() => {
        setInput(prev => ({ ...prev, [input.name]: input.value}))
    }, [input.name, input.value])



    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.createPokemon(input));
        setInput(initialState);
        alert('Pokemon succesfully created!')
        history.push('/pokemons')
    };


    const handleChange = (e) => {
            e.preventDefault();
            setError(validate({...input, [e.target.name] : e.target.value}))
            setInput({...input, [e.target.name] : e.target.value})
        }
        
        const handleTypes = (e) => {
                
                if(!input.types.includes(e.target.value)){
                        setInput({...input, types: [...input.types, e.target.value]})
                        
                }
                else{
                        input.types = input.types.filter(type => type !== e.target.value)
                        setInput({...input, types: input.types})
                }
               
                console.warn(e.target.value)
        }
        
        
        
        return (
                <div className="form-poke">
                <div className="back">
                <Link to='/pokemons' className="link-back">BACK</Link>

                </div>
            <form enctype="multipart/form-data" onSubmit={(e) => handleOnSubmit(e)}>
                <img src="/media/pokeball-form.png" className="pikaform" alt="poke-form" />
                <img src="/media/pokelab.png" className="poke-lab" alt="poke-lab" />
                <div className="cont-form">
                <label>Name: </label>
                <input type="text"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                        />
                <label>IMG: </label>
                <input id="img" type="file"
                        name="img"
                        value={input.img}
                        onChange={handleChange}
                        />
                <label>HP: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="hp"
                        value={input.hp}
                        onChange={handleChange}
                        />
                <label>ATTACK: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="attack"
                        value={input.attack}
                        onChange={handleChange}
                        />
                <label>DEFENSE: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="defense"
                        value={input.defense}
                        onChange={handleChange}
                        />
                <label>SPEED: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="speed"
                        value={input.speed}
                        onChange={handleChange}
                        />
                <label>HEIGHT: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="height"
                        value={input.height}
                        onChange={handleChange}
                        />
                <label>WEIGHT: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="weight"
                        value={input.weight}
                        onChange={handleChange}
                        />
                <label>TYPES: </label>
                <br></br>
                {
                        alltypes?.map(type => {
                                return  (
                                        <div className="type-container">
                                        <label className="form-types">{type.name}</label>
                                        <input className="type-box" 
                                              type="checkbox"
                                              name="types"
                                              value={type.id}
                                              onChange={handleTypes}
                                              />  
                                        </div>
                                )
                        })
                }
                </div>
                { error.name && (<span className="danger">{error.name}</span>)}
                { error.types && (<span className="danger">{error.types}</span>)}

                <button type="submit" className="create-button" disabled={!input.name || !input.hp || !input.types.length ? true : false}>Create Pokemon</button>        
            </form>
                <span className="text">CREATE YOUR OWN POKEMON!</span>
        </div>
    );
    
};

const validate = input => {
        let error = {};
        if(!/^[A-Za-z\s]*$/.test(input.name))  error.name = "Name invalid!";
        if(!input.types.length || input.types.length>2) error.types = "Your Pokémon should have one type at least or two at most"
        return error
}

export default CreatePokemon;