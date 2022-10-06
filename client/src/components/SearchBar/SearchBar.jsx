import React, { useState } from "react";
import {connect} from "react-redux";
import * as actions from "../../redux/actions/index.js";
import "./SearchBar.css";




const SearchBar = (props) => {

    const [input, setInput] = useState('');
   

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleName = (e) => {
        props.getByName(input)
    }

    return (
        <form className="parent" onSubmit={(e)=> {
            e.preventDefault();
            if(!input) alert('Name...?')
            else{
                handleName()
                setInput('')
                
            }
        }}>
            <input className="bar" value={input} onChange={handleInput} type="text" placeholder="Search Name..."/>
            <input className="search" type="submit" value="Go!" />
        </form>
    );
};

function mapStateToProps (state) {
    return {
      pokemons: state.pokemons,
      
    }
  }
  
  function mapDispatchToProps (dispatch){
    return{
      
      getByName: input => dispatch(actions.getByName(input)),
      
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)