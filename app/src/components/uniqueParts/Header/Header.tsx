import Image from 'next/image';
import router from 'next/router';
import { memo, MouseEventHandler } from 'react';

/**
 * ヘッダーコンポーネント
 * @param props
 */
export const Header = memo(() => {
  return (
    <header className="fixed z-10 w-full h-[70px] bg-white shadow-lg">
      <div className="flex mx-auto w-full max-w-[1230px]">
        <div className="flex-1">
          <Image
            className="cursor-pointer"
            src="/images/logo500.png"
            alt="logo"
            objectFit="cover"
            width="70"
            height="70"
            onClick={() => router.push('/')}
          />
        </div>
      </div>
    </header>
  );
});
