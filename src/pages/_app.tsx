import type { AppProps } from 'next/app';
import { MultiProvider } from '../context';
import { SessionProvider } from 'next-auth/react';
import { GlobalStyles } from '@style/globalStyle';
import { AuthComponent } from 'src/global/auth/AuthComponent';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { getHeightPhone } from '@utilis/getHeightPhone';
interface IAuthProps extends AppProps {
  Component: any;
}

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: IAuthProps) {
  getHeightPhone();
  return (
    <QueryClientProvider client={queryClient}>
      <MultiProvider>
        <SessionProvider session={session}>
          <GlobalStyles />

          {Component.auth ? (
            <AuthComponent>
              <Component {...pageProps} />
            </AuthComponent>
          ) : (
            <Component {...pageProps} />
          )}
        </SessionProvider>
      </MultiProvider>
    </QueryClientProvider>
  );
}
