import 'video.js/dist/video-js.css';

import Head from 'next/head';

import VideoPlayer from '@/features/Video//components/VideoPlayer';
import { useQueryVideo } from '@/features/Video//hooks/useQueryVideo';
import { Information } from '@/features/Video/components/Information';

/**
 * プレイヤーでビデオを表示する昨日
 */
export const Video: React.FC = () => {
  const { data, loading, error } = useQueryVideo();

  if (loading) return <div>...loading</div>;
  if (error) return <div>時間をおいてリロードしてください。</div>;

  const videoJsOptions = {
    sources: [{ src: data?.AdultVideo.url! }],
    poster: data?.AdultVideo.thumbnail.url!,
  };

  return (
    <>
      <Head>
        <title>{data?.AdultVideo.name} - nne</title>
        <meta
          name="description"
          content={data?.AdultVideo.name + 'の動画です。'}
        />
      </Head>
      <div className="m-0 mx-auto max-w-[800px]">
        <VideoPlayer options={videoJsOptions} />
        <Information movieName={data?.AdultVideo.name} />
      </div>
    </>
  );
};
