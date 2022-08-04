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
  // TODO: 一旦例がをスローする方法、Suspendseができる方法でやる
  if (error) throw new Error(error.message);

  return (
    <>
      <List adultVideos={data?.AdultVideos} />
    </>
  );
};
