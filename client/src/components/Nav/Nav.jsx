import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
      <div className="nav">
        <Link to="/pokemons">Home</Link>
        <Link to="/pokemons/create">Create Character</Link>
      </div>
    );
}
