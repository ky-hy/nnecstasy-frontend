import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '@/components/uniqueParts/ErrorFallback';
import apolloClient from '@/libs/apollo';

/**
 * 各種プロパイダーの設定されたコンポーネント
 * @param param0.children 子コンポーネント
 */
export const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </ErrorBoundary>
  );
};
