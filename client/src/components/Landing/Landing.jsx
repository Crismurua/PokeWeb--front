import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"


const Landing = () => {

    return (
        <div className="landing">
            <button className="enter"><Link to="/pokemons" ><span className="welcome">WELCOME</span></Link></button>
            <img src="media/pokemon-logo.png" className="land-logo" alt="logo" />
            <img src="media/landing.png" className="wall" alt="pokeball" />

        </div>
    )
}
export default Landing;