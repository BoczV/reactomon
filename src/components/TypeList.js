import React from "react";

const TypeList = (props) => {
  return props.types.results.map((type) => <h3>{type.name}</h3>);
};

export default TypeList;
