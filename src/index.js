import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NavbarThemeContextProvider } from "./theme/NavbarThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <NavbarThemeContextProvider>
      <App />
    </NavbarThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
