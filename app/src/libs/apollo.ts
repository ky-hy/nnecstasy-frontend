import { ApolloClient, InMemoryCache } from '@apollo/client';

/**
 * クライアントサイドでGraphQLを利用するための設定
 */
const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_NNE_API_URL, // エンドポイント設定
  cache: new InMemoryCache(), // キャッシュ設定
});

export default apolloClient;
