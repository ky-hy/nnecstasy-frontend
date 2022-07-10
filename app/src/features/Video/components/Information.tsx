import * as React from 'react';

type Props = {
  movieName: string | undefined;
};

/**
 * 動画詳細情報
 * @param param0.movieName 動画名
 */
export const Information: React.FC<Props> = ({ movieName }) => {
  return (
    <h2 className="mx-2 mt-4 text-xl font-bold break-words">{movieName}</h2>
  );
};
