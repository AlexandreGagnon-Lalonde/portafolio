import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import React, { useState, useEffect } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { FiMoon, FiSun } from "react-icons/fi";

export default function App({ Component, pageProps }) {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);

  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <button onClick={darkMode.enable}>
        <FiMoon />
      </button>
      <button onClick={darkMode.disable}>
        <FiSun />
      </button>
      {isMounted && <Component {...pageProps} />}{" "}
    </ThemeProvider>
  );
}
