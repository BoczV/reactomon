import React, { Component } from "react";

export class SinglePokemon extends Component {
  render() {
    const pokemonUrl = this.props.pokemon.url;
    const pokemonId = pokemonUrl.substring(34, pokemonUrl.length - 1);
    const routeString = `/pokemon/${pokemonId}`;
    return (
      <h3>
        <a href={routeString}>{this.props.pokemon.name}</a>
      </h3>
    );
  }
}

export default SinglePokemon;
