import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Consolas", "Lucida Console", Courier, monospace;
  color: ${(props) => props.theme.color};
  transition: color 0.50s linear, border-color 0.50s linear, background-color 0.50s linear;
}
`;

export const greenTheme = {
  color: "forestgreen",
};

export const whiteTheme = {
  color: "lightgrey",
};

GlobalStyles.displayName = "GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
