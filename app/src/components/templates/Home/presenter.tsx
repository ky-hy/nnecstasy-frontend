import Head from 'next/head';
import router from 'next/router';
import { GetAdultVideosQuery } from '../../../graphql/generated';
import { Card } from '../../uiParts/Card';

type Props = {
  /** ビデオ一覧 */
  adultVideos: GetAdultVideosQuery['AdultVideos'] | undefined;
};

/**
 * ホームページのpresenterコンポーネント
 *
 * 対応するページURL: /
 */
const Home = (props: Props) => (
  <>
    <Head>
      <title>nne - ホーム</title>
      <meta name="description" content="nneのホームページです。" />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mb-[-20px] sm:mb-[-30px]">
      {props.adultVideos?.map((video) => (
        <Card
          className="mx-auto mb-[20px] w-[95%] sm:mx-auto sm:mb-[30px]"
          key={video.name}
          title={video.name}
          description={video.name}
          thumnnail={video.thumbnail.url}
          onClick={() => router.push(`/videos/${video.id}`)}
        />
      ))}
    </div>
  </>
);
export default Home;
