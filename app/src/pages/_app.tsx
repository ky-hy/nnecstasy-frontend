import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { Footer } from '../components/uniqueParts/Footer';
import { Header } from '../components/uniqueParts/Header';
import apolloClient from '../libs/apollo';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  // モックサーバーを起動
  if (process.env.NODE_ENV === 'development') {
    const { setServer } = require('../../mocks');
    setServer();
  }

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <div className="flex flex-col min-h-[100vh]">
          <Header />
          <main className="flex-1 my-[70px] mx-auto w-full max-w-[1230px] md:my-[80px]">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
