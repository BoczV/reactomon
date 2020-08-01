import React, { useState } from "react";

export const NavbarThemeContext = React.createContext(["light", () => {}]);

export const NavbarThemeContextProvider = (props) => {
  const theme = useState("dark");
  return (
    <NavbarThemeContext.Provider value={theme}>
      {props.children}
    </NavbarThemeContext.Provider>
  );
};