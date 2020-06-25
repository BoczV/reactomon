import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/pokemons">Pokemons</a>
          </li>
          <li>
            <a href="/types">Types</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
