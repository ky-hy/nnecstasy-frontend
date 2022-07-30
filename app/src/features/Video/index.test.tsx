import { screen } from '@testing-library/react';
import NextLink from 'next/link';
import singletonRouter, { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
import { createDynamicRouteParser } from 'next-router-mock/dynamic-routes';

import { setRenderComponent } from '@/test';

import { Video } from '.';

describe('Videoは各ビデオおよび詳細を表示する機能', () => {
  beforeAll(() => {
    // ダイナミックルーティングの設定
    mockRouter.useParser(
      createDynamicRouteParser([
        // These paths should match those found in the `/pages` folder:
        '/videos/[id]',
      ]),
    );
  });
  test('URLよりビデオidを取得し、ビデオidよりビデオデータを取得し、表示する', async () => {
    // URL遷移
    mockRouter.push('/videos/video_id_3');

    const { render } = setRenderComponent(<Video />);
    render();

    expect(await screen.findByText('...loading')).toBeTruthy();
    expect(await screen.findByText('video_name_3')).toBeVisible();
  });
});
