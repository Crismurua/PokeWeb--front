//import './App.css';
import React from "react";
import { Route } from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx";
import PokemonCards from "./components/PokemonCards/PokemonCards.jsx";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail.jsx";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon.jsx";


import Landing from "./components/Landing/Landing.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <Landing />}/>
      <Route path='/pokemons' render={() => <Nav />}/>
      <Route exact path='/pokemons' render={() => <PokemonCards />}/>
      <Route exact path='/pokemons/:id' render={() => <PokemonDetail />}/>
      <Route exact path='/create' render={() => <CreatePokemon />}/>
      {/* <Route path='*' render={()=> <ErrorPage />}/> */}
      
    </div>
  );
}

export default App;
