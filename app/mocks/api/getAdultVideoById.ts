import { graphql } from 'msw';
import { GetAdultVideoByIdDocument } from '../../src/graphql/generated';

export const getAdultVideoById = graphql.query(
  GetAdultVideoByIdDocument,
  (req, res, ctx) => {
    console.log(req.variables.id);
    if (req.variables.id === 'video_id_0') {
      return res(
        ctx.data({
          AdultVideo: {
            name: 'testtesttesttesttexztestestestesttestetesttesttestesttestesttestettestewstestswteststevideo_name0',
            url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
        }),
      );
    }
    if (req.variables.id === 'video_id_1') {
      return res(
        ctx.data({
          AdultVideo: {
            name: 'テストテストテストテストてテストテストテストテストvideo_name_1',
            url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
        }),
      );
    }
    if (req.variables.id === 'video_id_2') {
      return res(
        ctx.data({
          AdultVideo: {
            name: 'video_name_2',
            url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
        }),
      );
    }
    if (req.variables.id === 'video_id_3') {
      return res(
        ctx.data({
          AdultVideo: {
            name: 'video_name_3',
            url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
            thumbnail: {
              url: 'https://ei.phncdn.com//videos//202105//08//387713851//thumbs_1//(m=eaf8Ggaaaa)(mh=McPhC2ubGCFPKeuX)1.jpg',
            },
          },
        }),
      );
    }
  },
);
