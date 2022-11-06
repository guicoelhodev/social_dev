import { FC, ReactNode } from 'react';
import { ThemeContextProvider } from './theme';

interface IGlobalContext {
  children: ReactNode;
}
export const GlobalProvider: FC<IGlobalContext> = ({ children }) => {
  return (
    <>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </>
  );
};
