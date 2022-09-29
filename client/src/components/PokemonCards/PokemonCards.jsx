import React, { Component } from "react";
import * as actions from "../../redux/actions/index.js";
import { connect } from "react-redux";
import PokemonCard from "../PokemonCard/PokemonCard.jsx"


export class PokemonCards extends Component {
    componentDidMount(){
        this.props.getPokemons()
    }
    render(){
        return (
        <div className="Cards">
            <h3>Pokemons</h3>
            {
                this.props.pokemons?.map(p => {
                    return (
                        <PokemonCard key={p.id}
                                name={p.name}
                                img={p.img}
                                types={p.types}
                        />
                    )
                })
            }
        </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
      pokemons: state.pokemons
    }
   }
  
  export const mapDispatchToProps = (dispatch) => {
    return {
      getPokemons: () => dispatch(actions.getPokemons())
    }
   }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PokemonCards);
  