import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="main-page">
            <img src="/media/not-found-page.png" className="nf-img" alt="404 Not Found" />
            <button className="redir-link"><Link to='/pokemons'>LET'S TRY AGAIN</Link></button>
            <h2 className="nf-tittle">404 NOT FOUND!</h2>
        </div>
    )
}


export default ErrorPage;