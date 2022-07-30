import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';

import apolloClient from '@/libs/apollo';

/**
 * 各種プロパイダーの設定されたコンポーネント
 * @param param0.children 子コンポーネント
 */
export const Provider = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
