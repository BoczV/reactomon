import React, { useContext } from "react";
import SinglePokemon from "./SinglePokemon";
import { PokemonContext } from "../contexts/PokemonContext";

const PokemonList = (props) => {
  const [pokemons] = useContext(PokemonContext);

  if (pokemons.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return pokemons.results.map((pokemon) => (
      <SinglePokemon
        pokemon={pokemon}
        capitalizeFirstLetter={props.capitalizeFirstLetter}
      />
    ));
  }
};

export default PokemonList;
