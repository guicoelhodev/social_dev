import type { AppProps } from 'next/app';
import { GlobalProvider } from '../context';
import { SessionProvider } from 'next-auth/react';
import { GlobalStyles } from '@style/globalStyle';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <GlobalProvider>
      <SessionProvider session={session}>
        <GlobalStyles />
        <Component {...pageProps} />
      </SessionProvider>
    </GlobalProvider>
  );
}
