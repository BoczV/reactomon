import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";
import Greetings from "./components/Greetings";

const HeaderH1 = styled.h1`
  text-align: center;
`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data));
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data));
  }, []);

  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          render={() => (
            <React.Fragment>
              <HeaderH1>Reactomon</HeaderH1>
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
