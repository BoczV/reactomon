import React from "react";

const TypeList = (props) => {
  if (props.types.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return props.types.results.map((type) => <h3>{type.name}</h3>);
  }
};

export default TypeList;
