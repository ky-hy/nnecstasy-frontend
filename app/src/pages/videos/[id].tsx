import type { NextPage } from 'next';
import Head from 'next/head';
import 'video.js/dist/video-js.css';
import { Video } from '../../features/Video';

/**
 * 動画表示ページ
 */
const VideoDetail: NextPage = () => {
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

export default VideoDetail;
