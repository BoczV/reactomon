import React from "react";
import "../App.css";
import styled from "styled-components";

const Navbar = (props) => {
  const Home = styled.a`
    float: left;
    border-right: 1px solid #bbb;
    background-color: yellowgreen;
    margin: 0 auto;
    max-width: 1000px;

    width: auto;
    position: absolute;
    right: 0px;
  `;

  return (
    <div>
      <ul>
        <li>
          <a href="/pokemons">Pokemons</a>
        </li>
        <li>
          <a href="/types">Types</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <Home href="/">Home</Home>
        </li>
      </ul>
      <br />
      <br />
    </div>
  );
};

export default Navbar;
