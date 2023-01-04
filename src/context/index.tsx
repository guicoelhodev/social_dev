import React, { ReactNode } from 'react';
import { FirstAccessProvider } from './firstAccess';
import { ThemeContextProvider } from './theme';
import { UserActionsProvider } from './userActions';
interface MultiProviderProps {
  children: ReactNode;
}

const providers = [
  ThemeContextProvider,
  FirstAccessProvider,
  UserActionsProvider,
];

export const MultiProvider: React.FC<MultiProviderProps> = ({ children }) => (
  <>
    {providers.reduceRight((acc, Comp) => {
      return <Comp>{acc}</Comp>;
    }, children)}
  </>
);

/*
 If you want to add provider by props:

 interface MultiProviderProps {
  providers: Array<React.JSXElementConstructor<React.PropsWithChildren<unknown>>
  >;
  children: ReactNode;
}

export const MultiProvider: React.FC<MultiProviderProps> = ({
  providers = [],
  children,
}) => (
  <>
    {providers.reduceRight((acc, Comp) => {
      return <Comp>{acc}</Comp>;
    }, children)}
  </>
);
 */
