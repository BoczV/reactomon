import React, { useState, useEffect } from "react";

import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Navbar from "./components/Navbar";
import PokemonDetail from "./components/PokemonDetail";

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

  console.log("Hey React!");

  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          render={() => (
            <React.Fragment>
              <h1>Reactomon</h1>
              <Navbar pokemons={pokemons} types={types} />
            </React.Fragment>
          )}
        />

        <Route
          path="/pokemons"
          render={() => (
            <React.Fragment>
              <PokemonList pokemons={pokemons} />
            </React.Fragment>
          )}
        />

        <Route
          path="/types"
          render={() => (
            <React.Fragment>
              <TypeList types={types} />
            </React.Fragment>
          )}
        />

        <Route
          path="/pokemon/:id"
          render={(props) => (
            <React.Fragment>
              <PokemonDetail pokemons={pokemons} id={props.match.params.id} />
            </React.Fragment>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
