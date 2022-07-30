import { setupWorker } from 'msw';
import { handlers } from './handlers';

// ブラウザ側で動くモックサーバのインスタンス
export const worker = setupWorker(...handlers);
