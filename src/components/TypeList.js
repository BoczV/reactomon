import React from "react";
import styled from "styled-components";

const Type = styled.p`
  text-decoration: underline;
`;
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const TypeList = (props) => {
  if (props.types.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return props.types.results.map((type) => (
      <Type>{capitalizeFirstLetter(type.name)}</Type>
    ));
  }
};

export default TypeList;
