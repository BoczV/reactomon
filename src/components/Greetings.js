import React from "react";
import styled from "styled-components";

const HomePageBio = styled.div`
  text-align: center;
`;

const Greetings = () => {
  return (
    <HomePageBio>
      <img src="" alt=""></img>
      <h2>Welcome in our PokePedia!</h2>
      <p>You will find the rarest pokemons here!</p>
    </HomePageBio>
  );
};

export default Greetings;
