import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
/**
 * レイアウトを指定するための型
 *
 * 各ページ(pagesディレクトリ)で利用する
 */
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
/**
 * レイアウトを指定するための型
 *
 * _app.tsxで利用
 */
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
