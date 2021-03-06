import { useQuery } from '@apollo/client';
import * as React from 'react';

import { List } from '@/features/Videos/components/List';
import {
  GetAdultVideosDocument,
  GetAdultVideosQuery,
} from '@/graphql/generated';

/**
 * ビデオリストを表示する機能
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
