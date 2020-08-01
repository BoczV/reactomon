import React, { useContext } from "react";
import styled from "styled-components";
import { TypeContext } from "../contexts/TypeContext";

const Type = styled.p`
  text-decoration: underline;
`;

const TypeList = (props) => {
  const [types] = useContext(TypeContext);

  if (types.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return types.results.map((type) => (
      <Type>{props.capitalizeFirstLetter(type.name)}</Type>
    ));
  }
};

export default TypeList;
