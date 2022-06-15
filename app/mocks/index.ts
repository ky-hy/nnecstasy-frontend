// Next.jsはクライアントサイドレンダリングとサーバーサイドレンダリングの両方に対応しているため、
// それぞれに適したモックサーバーを利用するためにif文で制御
export const setServer = () => {
  if (typeof window === 'undefined') {
    // サーバー側
    const { server } = require('./server');
    server.listen();
  } else {
    // ブラウザ側
    const { worker } = require('./browser');
    worker.start();
  }
};
