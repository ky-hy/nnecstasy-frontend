import '@/styles/globals.css';

import { Provider } from '@/components/uniqueParts/Provider';
import { AppPropsWithLayout } from '@/libs/next/types';

function App({ Component, pageProps }: AppPropsWithLayout) {
  // モックサーバーを起動
  if (process.env.NODE_ENV === 'development') {
    const { setServer } = require('../../mocks');
    setServer();
  }

  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Provider>
      <Component {...pageProps} />
    </Provider>,
  );
}

export default App;
