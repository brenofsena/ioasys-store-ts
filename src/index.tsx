import React from "react";
import { render } from "react-dom";
import Router from "routes/router";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "styles";
import store from "store/store";

render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
