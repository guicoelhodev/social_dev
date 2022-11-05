import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyle";
import { darkTheme, lightTheme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={() => themeToggler()}>Switch Theme</button>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
