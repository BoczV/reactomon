import React from "react";

const SinglePokemon = (props) => {
  const pokemonUrl = props.pokemon.url;
  const pokemonId = pokemonUrl.substring(34, pokemonUrl.length - 1);
  const routeString = `/pokemon/${pokemonId}`;
  return (
    <h3>
      <a href={routeString}>{props.pokemon.name}</a>
    </h3>
  );
};

export default SinglePokemon;
