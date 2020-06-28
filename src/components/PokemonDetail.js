import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetail = (props) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((res) => setDetails(res.data));
  }, [props.id]);

  if (props.pokemons.length !== 0) {
    return (
      <div>
        <p>Pokemon name: {details.name}</p>
        <p>Height: {details.height}</p>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default PokemonDetail;
