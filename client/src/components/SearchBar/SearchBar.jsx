import React, { useState } from "react";
import {useDispatch} from "react-redux";
import * as actions from "../../redux/actions/index.js";


const SearchBar = () => {

    const [input, setInput] = useState('');
    let dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <form onSubmit={(e)=> {
            e.preventDefault();
            if(!input) alert('Name...?')
            else{
                dispatch(actions.getByName(input))
                setInput('')
            }
        }}>
            <input value={input} onChange={e => (handleInput(e))} type="text" placeholder="Search Name..."/>
            <input type="submit" value="Go!" />
        </form>
    );
};

export default SearchBar;