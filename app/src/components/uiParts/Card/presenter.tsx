import Image from 'next/image';
import React from 'react';

type Props = {
  /** 説明 */
  description: string;
  /** タイトル */
  title: string;
  /** サムネイルのURL */
  thumnnail: string;
};

/**
 * カードコンポーネント
 * @param props.description 説明
 * @param props.title タイトル
 * @param props.thumnail サムネイル画像のパス
 */
const Card = React.memo((props: Props) => (
  <div className="shadow-xl">
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
      <h3 className="mb-[5px] text-[1.125rem] font-bold">{props.title}</h3>
      <p className="text-[#777]">{props.description}</p>
    </div>
  </div>
));

export default Card;
