import './App.css';
import React from "react";
import { Route } from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx";
import PokemonCards from "./components/PokemonCards/PokemonCards.jsx";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail.jsx";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon.jsx";
import Types from "./components/Types/Types.jsx";


function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <Landing />}/>
      <Route path='/pokemons' render={() => <Nav />}/>
      <Route exact path='/pokemons' render={() => <PokemonCards />}/>
      <Route path='/pokemons/:id' render={() => <PokemonDetail />}/>
      <Route path='/pokemons/create' render={() => <CreatePokemon />}/>
      <Route path='/types' render={() => <Types />}/>
    </div>
  );
}

export default App;
