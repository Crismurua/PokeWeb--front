import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"


const Landing = () => {

    return (
        <div className="landing">
            <Link to="/pokemons" className="enter"><span className="welcome">WELCOME</span></Link>
            <img src="media/pokemon-logo.png" className="land-logo" alt="logo" />
            <img src="media/landing.png" className="wall" alt="pokeball" />

        </div>
    )
}
export default Landing;