import { getAdultVideoById } from './api/getAdultVideoById';
import { getAdultVideos } from './api/video';

// ハンドラ部分
// モックの返却値を結合する部分
export const handlers = [getAdultVideos, getAdultVideoById];
