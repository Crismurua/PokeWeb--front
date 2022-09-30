import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/index.js";
import {useHistory, Link} from 'react-router-dom'


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

    const initialTypes = [];
    
    const dispatch = useDispatch();
    const [input, setInput] = React.useState(initialState);
    const alltypes = useSelector(state => state.types)
    const history = useHistory();
    const [selectedTypes, setType] = React.useState(initialTypes);


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
        history.push('/pokemons')
    };


    const handleChange = (e) => {
        e.preventDefault();
        setInput(prev => ({ ...prev, [e.target.name] : e.target.value}))
    }
    
    const handleTypes = (e) => {
        if(!selectedTypes.includes(e.target.value)){
                setType(prev => [...prev, e.target.value])

        }
        else{
                setType(prev => prev.filter(type => type !== e.target.value))
        }
        setInput(prev => ({ ...prev, types : selectedTypes}))
        console.warn(selectedTypes)
    }



    return (
        <div>
                <Link to='/pokemons'>BACK</Link>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <label>Name: </label>
                <input type="text"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                        />
                <label>IMG: </label>
                <input type="file"
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
                {
                        alltypes?.map(type => {
                                return  (
                                        <div >
                                        <label>{type.name}</label>
                                        <input type="checkbox"
                                              name="types"
                                              value={type.id}
                                              onChange={handleTypes}
                                              />  
                                        </div>
                                )
                        })
                }

                <button type="submit" disabled={!input.name || !input.hp || !input.types ? true : false}>Create Pokemon</button>        
            </form>
        </div>
    );

};

export default CreatePokemon;