import { graphql } from 'msw';

import { GetAdultVideosDocument } from '@/graphql/generated';

// ビデオを取得する
export const getAdultVideos = graphql.query(
  GetAdultVideosDocument,
  (req, res, ctx) => {
    return res(
      ctx.data({
        AdultVideos: [
          {
            name: 'testtresttesttesttesttesttexztestestestesttestetesttesttestesttestesttestettestewstestswteststevideo_name_0',
            url: 'video_url_0',
            id: 'video_id_0',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
          {
            name: 'テストテストテストテストてテストテストテストテストvideo_name_1',
            url: 'video_url_1',
            id: 'video_id_1',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
          {
            name: 'video_name_2',
            url: 'video_url_2',
            id: 'video_id_2',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
          {
            name: 'video_name_3',
            url: 'video_url_3',
            id: 'video_id_3',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
        ],
      }),
    );
  },
);
