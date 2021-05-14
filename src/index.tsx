import React from "react";
import { render } from "react-dom";
import Router from "routes/router";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "styles";

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
