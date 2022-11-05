import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";

export interface IThemeContext {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  themeToggler: () => void;
}

interface IThemeContextProvider {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | {}>({});

export const ThemeContextProvider: FC<IThemeContextProvider> = ({
  children,
}) => {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeToggler }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
