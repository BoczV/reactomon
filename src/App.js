import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import Greetings from "./components/Greetings";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const MainImg = styled.img`
  width: 20%;
  heigth: auto;
  text-align: center;
`;

const PlayArea = styled.div`
  position: relative;
  text-align: right;
`;

const Buttons = styled.div`
  display: inline-block;
`;

const MusicControl = styled.button`
  background-color: yellowgreen;
  color: white;
  border: solid white;
  border-radius: 40%
  &:hover {
    background-color: red;
  }
`;

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [audio, setAudio] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data));
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data));

    setAudio(new Audio("/Pokemon- TV Theme Song (Full) MUBlogger.mp3"));
  }, []);

  const play = () => {
    audio.play();
  };

  const stop = () => {
    audio.pause();
  };

  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          render={() => (
            <React.Fragment>
              <MainImg
                src="/1200px-International_Pokémon_logo.svg.png"
                alt=""
              ></MainImg>
              <PlayArea>
                <h3>Pokemon's main theme.</h3>
                <Buttons>
                  <MusicControl onClick={play}>Play!</MusicControl>{" "}
                  <MusicControl onClick={stop}>Stop!</MusicControl>
                </Buttons>
              </PlayArea>
              <br />
              <Navbar pokemons={pokemons} types={types} />
            </React.Fragment>
          )}
        />

        <Route
          path="/about"
          render={() => (
            <React.Fragment>
              <Greetings />
            </React.Fragment>
          )}
        />

        <Route
          path="/pokemons"
          render={() => (
            <React.Fragment>
              <PokemonList
                pokemons={pokemons}
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            </React.Fragment>
          )}
        />

        <Route
          path="/types"
          render={() => (
            <React.Fragment>
              <TypeList
                types={types}
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            </React.Fragment>
          )}
        />

        <Route
          path="/pokemon/:id"
          render={(props) => (
            <React.Fragment>
              <PokemonDetail
                pokemons={pokemons}
                id={props.match.params.id}
                capitalizeFirstLetter={capitalizeFirstLetter}
              />
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
