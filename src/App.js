import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import Greetings from "./components/Greetings";
import { PokemonProvider } from "./contexts/PokemonContext";
import { TypeProvider } from "./contexts/TypeContext";
import { NavbarThemeContext } from "./theme/NavbarThemeContext";
import NavbarTheme from "./theme/NavbarTheme";

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
  const [audio, setAudio] = useState([]);
  const [themeMode, setThemeMode] = useContext(NavbarThemeContext);
  const currentTheme = NavbarTheme[themeMode];

  const MainDiv = styled.div`
    background-color: ${currentTheme.backgroundColor};
  `;

  useEffect(() => {
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
      <PokemonProvider>
        <TypeProvider>
          <MainDiv className="App">
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
                  <Navbar />
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
                  <PokemonList capitalizeFirstLetter={capitalizeFirstLetter} />
                </React.Fragment>
              )}
            />
            <Route
              path="/pokemon/:id"
              render={(props) => (
                <React.Fragment>
                  <PokemonDetail
                    id={props.match.params.id}
                    capitalizeFirstLetter={capitalizeFirstLetter}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/types"
              render={() => (
                <React.Fragment>
                  <TypeList capitalizeFirstLetter={capitalizeFirstLetter} />
                </React.Fragment>
              )}
            />
          </MainDiv>
        </TypeProvider>
      </PokemonProvider>
    </Router>
  );
};

export default App;
