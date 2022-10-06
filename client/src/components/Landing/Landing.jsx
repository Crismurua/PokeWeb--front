import React from "react";
import { Link } from "react-router-dom";


const Landing = () => {

    return (
        <div>
            <img src="media/pokeball.gif" alt="pokeball" />
            <h2><Link to="/pokemons">ENTER</Link></h2>

        </div>
    )
}
export default Landing;