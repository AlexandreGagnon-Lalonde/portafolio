import { ThemeProvider } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";

const theme = {};

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
