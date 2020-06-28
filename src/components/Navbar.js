import React from "react";
import "../App.css";

const Navbar = (props) => {
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
};

export default Navbar;
