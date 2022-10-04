import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";


export default function Nav() {
    return (
      <div className="nav">
        <Link to="/pokemons">HOME</Link>
        <Link to="/create">CREATE POKEMON</Link>
        <SearchBar />

      </div>
    );
}
