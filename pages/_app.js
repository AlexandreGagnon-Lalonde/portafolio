import "../styles/global.css";
import { ThemeProvider } from "styled-components";

const theme = {
  orange: "#ffa45b",
  yellow: "#ffda77",
  white: "#fbf6f0",
  blue: "#aee6e6",
  black: "#101010",
};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
