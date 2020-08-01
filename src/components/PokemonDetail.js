import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { PokemonContext } from "../contexts/PokemonContext";

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

const PokemonDetail = (props) => {
  const [pokemons] = useContext(PokemonContext);

  const [pokemonName, setPokemonName] = useState([]);

  const [height, setHeight] = useState(null);

  const [image, setImage] = useState("");

  const [weight, setWeight] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`).then((res) => {
      setPokemonName(props.capitalizeFirstLetter(res.data.name));
      setHeight(res.data.height);
      setWeight(res.data.weight);
    });
    setImage(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
    );
  }, [props, props.id]);

  if (pokemons.length === 0) {
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
