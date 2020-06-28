import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const PokemonDetail = (props) => {
  const [pokemonName, setPokemonName] = useState([]);

  const [height, setHeight] = useState([]);

  const [image, setImage] = useState([]);

  const [weight, setWeight] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((res) => setPokemonName(capitalizeFirstLetter(res.data.name)));

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((res) => setHeight(res.data.height));

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
      .then((res) => setWeight(res.data.weight));

    setImage(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    );
  }, [props.id]);

  const PokemonCard = styled.div`
    text-align: center;
    background-color: yellow;
    border-radius: 10%;
    display: inline-block;
  `;

  const PokemonImg = styled.div`
    background-color: white;
    border: solid yellow;
    border-radius: 10%;
  `;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  if (props.pokemons.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <PokemonCard>
        <PokemonImg>
          <img src={image} alt=""></img>
        </PokemonImg>
        <h3>{pokemonName}</h3>
        <p>Weight: {weight}</p>
        <p>Height: {height}</p>
      </PokemonCard>
    );
  }
};

export default PokemonDetail;
