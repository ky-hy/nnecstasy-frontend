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
            name: 'testtesttesttesttexztestestestesttestetesttesttestesttestesttestettestewstestswteststevideo_name0',
            url: 'video_url0_t',
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
          {
            name: 'video_name3',
            url: 'video_url3',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
          {
            name: 'video_name4',
            url: 'video_url4',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
        ],
      }),
    );
  },
);
