import { useQuery } from '@apollo/client';
import * as React from 'react';

import {
  GetAdultVideosDocument,
  GetAdultVideosQuery,
} from '@/graphql/generated';

import { List } from './components/List';

/**
 * ホームページのpresenterコンポーネント
 *
 * 対応するページURL: /
 */
export const Videos: React.FC = () => {
  const { data, error, loading } = useQuery<GetAdultVideosQuery>(
    GetAdultVideosDocument,
  );

  if (loading) return <div>...loading</div>;
  if (error) return <div>時間をおいてリロードしてください。</div>;

  return (
    <>
      <List adultVideos={data?.AdultVideos} />
    </>
  );
};
