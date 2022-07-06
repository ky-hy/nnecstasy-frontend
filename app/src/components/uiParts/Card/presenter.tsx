import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

type Props = {
  /** 説明 */
  description: string;
  /** タイトル */
  title: string;
  /** サムネイルのURL */
  thumnnail: string;
  /** クリックされた時の動作 */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** className */
  className?: string;
};

/**
 * カードコンポーネント
 * @param props.description 説明
 * @param props.title タイトル
 * @param props.thumnail サムネイル画像のパス
 * @param props.onClick カードをクリックした時に走るコールバック
 * @param props.className
 */
const Card = React.memo((props: Props) => (
  <div
    className={clsx(props.className, 'shadow-xl cursor-pointer')}
    onClick={props.onClick}
  >
    <figure className="overflow-hidden relative pt-[56.25%]">
      <Image
        src={props.thumnnail}
        alt={props.title}
        layout="fill"
        objectFit="contain"
        className="absolute top-[50%] w-full"
      />
    </figure>
    <div className="p-[15px] last:mb-0">
      <h3 className="overflow-hidden mb-[5px] text-[1.125rem] font-bold text-ellipsis whitespace-nowrap break-words">
        {props.title}
      </h3>
      <p className="overflow-hidden text-[#777] text-ellipsis whitespace-nowrap break-words">
        {props.description}
      </p>
    </div>
  </div>
));

export default Card;
