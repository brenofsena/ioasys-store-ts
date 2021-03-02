import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { theme } from "styles";

export const renderWithTheme = (component: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
