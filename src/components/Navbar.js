import React from "react";
import "../App.css";

const Navbar = (props) => {
  console.log("Pokemons:");
  console.log(props.pokemons.results);
  console.log("Types: ");
  console.log(props.types.results);
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
