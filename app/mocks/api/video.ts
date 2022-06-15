import { graphql } from 'msw';
import { GetAdultVideosDocument } from '../../src/graphql/generated';

// ビデオを取得する
export const getAdultVideos = graphql.query(
  GetAdultVideosDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        AdultVideos: [
          {
            name: 'video_name0',
            url: 'video_url0',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
          {
            name: 'video_name1',
            url: 'video_url1',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
        ],
      }),
    );
  },
);
