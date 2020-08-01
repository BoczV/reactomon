import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TypeContext = createContext();

export const TypeProvider = (props) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type")
      .then((res) => setTypes(res.data));
  }, []);
  return (
    <TypeContext.Provider value={[types, setTypes]}>
      {props.children}
    </TypeContext.Provider>
  );
};
