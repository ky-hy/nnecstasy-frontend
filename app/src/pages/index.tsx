import type { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

import { Home } from '@/components/templates/Home';
import { FluidLayout } from '@/layouts';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

/**
 * ホーム
 */
const HomePage: NextPageWithLayout = () => <Home />;

HomePage.getLayout = FluidLayout;

export default HomePage;
