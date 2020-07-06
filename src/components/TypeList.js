import React from "react";
import styled from "styled-components";

const Type = styled.p`
  text-decoration: underline;
`;

console.log("Hello!");

const TypeList = (props) => {
  if (props.types.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return props.types.results.map((type) => (
      <Type>{props.capitalizeFirstLetter(type.name)}</Type>
    ));
  }
};

export default TypeList;
