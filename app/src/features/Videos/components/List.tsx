import router from 'next/router';
import * as React from 'react';

import { Card } from '@/components/uiParts/Card';
import { GetAdultVideosQuery } from '@/graphql/generated';

type Props = {
  /** ビデオ一覧 */
  adultVideos: GetAdultVideosQuery['AdultVideos'] | undefined;
};

export const List: React.FC<Props> = (props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mb-[-20px] sm:mb-[-30px]">
      {props?.adultVideos?.map((video) => (
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
  );
};
