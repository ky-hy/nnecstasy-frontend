import Image from 'next/image';
import { memo, MouseEventHandler } from 'react';

type Props = {
  /** ホームボタン・ロゴを押された時の処理 */
  onclickHome: MouseEventHandler<HTMLElement> | undefined;
};
/**
 * ヘッダーコンポーネント
 * @param props
 */
const HeaderComponent = memo((props: Props) => (
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
          onClick={props.onclickHome}
        />
      </div>
    </div>
  </header>
));

export default HeaderComponent;
