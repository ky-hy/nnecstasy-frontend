import '@/styles/globals.css';

import { ApolloProvider } from '@apollo/client';

import apolloClient from '@/libs/apollo';
import { AppPropsWithLayout } from '@/libs/next/types';

function App({ Component, pageProps }: AppPropsWithLayout) {
  // モックサーバーを起動
  if (process.env.NODE_ENV === 'development') {
    const { setServer } = require('../../mocks');
    setServer();
  }

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>,
  );
}

export default App;
