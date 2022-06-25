import Head from 'next/head';
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
    <div className="flex flex-wrap mb-[-20px] sm:mb-[-30px]">
      {props.adultVideos?.map((video) => (
        <div
          className="mx-2 mb-[20px] w-full sm:mb-[30px] sm:w-[calc((100%/3)-16px)]"
          key={video.name}
        >
          <Card
            title={video.name}
            description={video.name}
            thumnnail={video.thumbnail.url}
          />
        </div>
      ))}
    </div>
  </>
);
export default Home;
