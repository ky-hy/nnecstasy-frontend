import { screen } from '@testing-library/react';

import { setRenderComponent } from '@/test';

import { Videos } from '.';

describe('Videosはビデオ一覧を表示する機能', () => {
  test('APIよりデータを取得し、ビデオ一覧を表示する', async () => {
    const { render } = setRenderComponent(<Videos />);
    render();

    expect(await screen.findByText('...loading')).toBeTruthy();
    expect((await screen.findAllByText('video_name_2'))[0]).toBeVisible();
  });
});
