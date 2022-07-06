import Head from 'next/head';
import 'video.js/dist/video-js.css';
import { Information } from './components/Information';
import VideoPlayer from './components/VideoPlayer';
import { useQueryVideo } from './hooks/useQueryVideo';

/**
 * プレイヤーでビデオを表示する昨日
 */
const Video: React.FC = () => {
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

export default Video;
