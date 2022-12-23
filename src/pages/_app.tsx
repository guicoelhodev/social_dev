import type { AppProps } from 'next/app';
import { GlobalProvider } from '../context';
import { SessionProvider } from 'next-auth/react';
import { GlobalStyles } from '@style/globalStyle';
import { AuthComponent } from 'src/global/auth/AuthComponent';

interface IAuthProps extends AppProps {
  Component: any;
}
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: IAuthProps) {
  return (
    <GlobalProvider>
      <SessionProvider session={session}>
        <GlobalStyles />
        <Component {...pageProps} />

        {Component.auth ? (
          <AuthComponent>
            <Component {...pageProps} />
          </AuthComponent>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </GlobalProvider>
  );
}
