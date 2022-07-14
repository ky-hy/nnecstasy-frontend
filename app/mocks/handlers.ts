import { getAdultVideoById } from '@/features/Video/api/mocks';
import { getAdultVideos } from '@/features/Videos/api/mocks';

// ハンドラ部分
// モックの返却値を結合する部分
export const handlers = [getAdultVideos, getAdultVideoById];
