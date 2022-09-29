import React from "react";
import { useDispatch } from "react-redux";

const CreatePokemon = () => {
    const initialState = {
        name: "",
        img: "",
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        types: [{id:0}],
        height: 0,
        weight: 0,
    };
    let dispatch = useDispatch();
    let [input, setInput] = React.useState(initialState);

    React.useEffect(() => {
        setInput(prev => ({ ...prev, [input.name]:input.value}))
    }, [])

    let handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(CreatePokemon(input));
        setInput(initialState);
    };

    return (
        <div>
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <label>Name: </label>
                <input type="text"
                        name="name"
                        value={input.name}
                        onChange={input}
                        />
                <label>IMG: </label>
                <input type="text"
                        name="img"
                        value={input.img}
                        onChange={input}
                        />
                <label>HP: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="hp"
                        value={input.hp}
                        onChange={input}
                        />
                <label>ATTACK: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="attack"
                        value={input.attack}
                        onChange={input}
                        />
                <label>DEFENSE: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="defense"
                        value={input.defense}
                        onChange={input}
                        />
                <label>SPEED: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="speed"
                        value={input.speed}
                        onChange={input}
                        />
                <label>HEIGHT: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="height"
                        value={input.height}
                        onChange={input}
                        />
                <label>WEIGHT: </label>
                <input type="number"
                        min="10"
                        max="100"
                        name="weight"
                        value={input.weight}
                        onChange={input}
                        />
                <label>TYPES: </label>
                <input type="checkbox"
                        name="types"
                        value={input.types}
                        onChange={input}
                        />

                <button type="submit">Create Pokemon</button>        
            </form>
        </div>
    );

};

export default CreatePokemon;