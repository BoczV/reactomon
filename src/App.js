import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import PokemonList from "./components/PokemonList";
import TypeList from "./components/TypeList";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    pokemons: [],
    types: [],
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => this.setState({ pokemons: res.data.results }));

    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => this.setState({ types: res.data.results }));
  }

  render() {
    console.log(this.state.pokemons);
    return (
      <Router>
        <div className="App">
          <Route
            path="/"
            render={(props) => (
              <React.Fragment>
                <h1>Reactomon</h1>
                <Navbar />
              </React.Fragment>
            )}
          />

          <Route
            path="/pokemons"
            render={(props) => (
              <React.Fragment>
                <PokemonList pokemons={this.state.pokemons} />
              </React.Fragment>
            )}
          />

          <Route
            path="/types"
            render={(props) => (
              <React.Fragment>
                <TypeList types={this.state.types} />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
