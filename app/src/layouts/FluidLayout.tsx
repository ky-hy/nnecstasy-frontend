import type { ReactElement } from 'react';

import { Footer } from '@/components/uniqueParts/Footer';
import { Header } from '@/components/uniqueParts/Header';

/**
 * レスポンシブ対応したレイアウト
 * @param page メインコンテンツ
 */
export const FluidLayout = (page: ReactElement) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />
      <main className="flex-1 my-[70px] mx-auto w-full max-w-[1230px] md:my-[80px]">
        {page}
      </main>
      <Footer />
    </div>
  );
};
