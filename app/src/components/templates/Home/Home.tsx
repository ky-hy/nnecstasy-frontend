import Head from 'next/head';
import * as React from 'react';

import { Videos } from '@/features/Videos';

/**
 * ホームページのpresenterコンポーネント
 *
 * 対応するページURL: /
 */
export const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>nne - ホーム</title>
        <meta name="description" content="nneのホームページです。" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Videos />
    </>
  );
};
