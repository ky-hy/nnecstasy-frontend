import Head from 'next/head';
import { GetAdultVideosQuery } from '../../../graphql/generated';
import Footer from '../../Footer';
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
      <meta name="description" content="nneのホームぺーじです。" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1 className=" text-4xl font-bold  text-red-700">nne</h1>
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
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);
export default Home;
