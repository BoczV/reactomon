import React from "react";
import SinglePokemon from "./SinglePokemon";

const PokemonList = (props) => {
  if (props.pokemons.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return props.pokemons.results.map((pokemon) => (
      <SinglePokemon pokemon={pokemon} />
    ));
  }
};

export default PokemonList;
