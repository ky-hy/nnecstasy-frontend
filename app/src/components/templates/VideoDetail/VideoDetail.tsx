import Head from 'next/head';

import { Video } from '@/features/Video';
import { NextPageWithLayout } from '@/libs/next/types';

/**
 * 動画表示ページ
 *
 * URL: /videos/[id]
 */
export const VideoDetail: React.FC = () => {
  return (
    <>
      <Head>
        <title>nne - nne</title>
        <meta name="description" content="nneの公式サイトです。" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Video />
    </>
  );
};
