import type { AppProps } from 'next/app';
import { GlobalProvider } from '../context';
import { GlobalStyles } from '../styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
