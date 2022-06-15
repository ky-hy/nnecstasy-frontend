import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { setServer } from '../../mocks';

function App({ Component, pageProps }: AppProps) {
  // モックサーバーを起動
  if (process.env.NODE_ENV === 'development') {
    setServer();
  }

  return (
        <Component {...pageProps} />
  );
}

export default App;
