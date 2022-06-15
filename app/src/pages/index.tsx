import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import { HomePresenter } from '../components/templates/Home';
import {
  GetAdultVideosDocument,
  GetAdultVideosQuery,
} from '../graphql/generated';

/**
 * ホーム
 */
const Home: NextPage = () => {
  // 一旦クライアントサイドレンダリングをする
  const { data, error, loading } = useQuery<GetAdultVideosQuery>(
    GetAdultVideosDocument,
  );

  if (loading) <div>...loading</div>;
  if (error) <div>時間をおいてリロードしてください。</div>;

  return <HomePresenter adultVideos={data?.AdultVideos} />;
};

export default Home;
