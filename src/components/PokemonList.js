import React, { Component } from "react";
import SinglePokemon from "./SinglePokemon";

export class PokemonList extends Component {
  render() {
    return this.props.pokemons.map((pokemon) => (
      <SinglePokemon pokemon={pokemon} />
    ));
  }
}

export default PokemonList;
