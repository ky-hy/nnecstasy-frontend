/**
 * エラー時に表示するコンポーネント
 *
 * react-error-boundaryのfallbackとして利用
 */
export const ErrorFallback = () => {
  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">
        問題が発生しました。時間を置いて再度アクセスをしてください。
      </h2>
      <button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        ホームへ戻る
      </button>
    </div>
  );
};
