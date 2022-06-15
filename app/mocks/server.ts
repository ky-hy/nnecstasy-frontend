import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// サーバーサイド側で動くモックサーバーのインスタンス
export const server = setupServer(...handlers);
