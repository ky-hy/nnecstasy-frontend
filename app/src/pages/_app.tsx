import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { setServer } from '../../mocks';
import apolloClient from '../libs/apollo';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  // モックサーバーを起動
  if (process.env.NODE_ENV === 'development') {
    setServer();
  }

  return (
    <div className="mx-auto w-full md:w-[1230px]">
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}

export default App;
