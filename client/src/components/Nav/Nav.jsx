import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";
import  "./Nav.css";
import logo from "../../media/pokeweb-logo.png"


export default function Nav() {
    return (
      <div className="nav">
        <SearchBar />
        <Link to="/pokemons"><img src={logo} className="logo" alt="pokeweb-logo"/></Link>
        <Link to="/create">CREATE POKEMON</Link>

      </div>
    );
}
