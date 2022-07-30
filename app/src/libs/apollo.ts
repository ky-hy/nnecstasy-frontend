import 'cross-fetch/polyfill';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_NNE_API_URL, // エンドポイント設定
  // Use explicit `window.fetch` so tha outgoing requests
  // are captured and deferred until the Service Worker is ready.
  // テストを実行する際以下の行内とうまく動作しない
  fetch: (...args) => fetch(...args),
});

const cache = new InMemoryCache();

/**
 * クライアントサイドでGraphQLを利用するための設定
 */
const apolloClient = new ApolloClient({
  cache,
  link,
});

export default apolloClient;
