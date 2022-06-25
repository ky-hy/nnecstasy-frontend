import Image from 'next/image';
import React, { MouseEventHandler } from 'react';

type Props = {
  /** ホームボタン・ロゴを押された時の処理 */
  onclickHome: MouseEventHandler<HTMLElement> | undefined;
};
/**
 * ヘッダーコンポーネント
 * @param props
 */
const HeaderComponent = React.memo((props: Props) => (
  <header className="flex mx-auto w-full md:w-[1230px]">
    <div className="flex-1">
      <Image
        className="cursor-pointer"
        src="/images/logo500.png"
        alt="logo"
        objectFit="cover"
        width="70"
        height="70"
        onClick={props.onclickHome}
      />
    </div>
  </header>
));

export default HeaderComponent;
