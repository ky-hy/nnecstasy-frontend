import { VideoDetail } from '@/components/templates/VideoDetail';
import { FluidLayout } from '@/layouts';
import { NextPageWithLayout } from '@/libs/next/types';

/**
 * 動画表示ページ
 */
const VideoDetailPage: NextPageWithLayout = () => <VideoDetail />;

VideoDetailPage.getLayout = FluidLayout;

export default VideoDetailPage;
