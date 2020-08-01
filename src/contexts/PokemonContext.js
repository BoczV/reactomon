import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data));
  }, []);

  return (
    <PokemonContext.Provider value={[pokemons, setPokemons]}>
      {props.children}
    </PokemonContext.Provider>
  );
};
