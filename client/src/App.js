//import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx";
import PokemonCards from "./components/PokemonCards/PokemonCards.jsx";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail.jsx";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon.jsx";


import Landing from "./components/Landing/Landing.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}/>
      <Route path='/pokemons' component={Nav}/>
      <Switch>  
      <Route exact path='/pokemons' render={() => <PokemonCards />}/>
      <Route exact path='/pokemons/:id' component={PokemonDetail}/>
      <Route exact path='/create' component={CreatePokemon}/>
      <Route path='*'>
        <ErrorPage />
      </Route> 
      </Switch>
      
    </div>
  );
}

export default App;
