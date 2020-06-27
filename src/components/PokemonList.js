import React from "react";
import SinglePokemon from "./SinglePokemon";

const PokemonList = (props) => {
  return props.pokemons.results.map((pokemon) => (
    <SinglePokemon pokemon={pokemon} />
  ));
};

export default PokemonList;
