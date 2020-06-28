import React from "react";
import styled from "styled-components";

const DivPokemon = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: yellowgreen;
  }
`;
const Container = styled.div`
  padding: 2px 16px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const SinglePokemon = (props) => {
  const pokemonUrl = props.pokemon.url;
  const pokemonId = pokemonUrl.substring(34, pokemonUrl.length - 1);
  const routeString = `/pokemon/${pokemonId}`;
  return (
    <DivPokemon>
      <Container>
        <Link href={routeString}>
          {pokemonId}
          {" ."}
          {props.pokemon.name}
        </Link>
      </Container>
    </DivPokemon>
  );
};

export default SinglePokemon;
