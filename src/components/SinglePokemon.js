import React, { Component } from "react";

export class SinglePokemon extends Component {
  render() {
    return (
      <h3>
        <a href="/">{this.props.pokemon.name}</a>
      </h3>
    );
  }
}

export default SinglePokemon;
