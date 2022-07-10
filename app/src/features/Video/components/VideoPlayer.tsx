/* eslint-disable tailwindcss/no-custom-classname */
import 'video.js/dist/video-js.css';

import * as React from 'react';
import videojs from 'video.js';

interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
}

const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
};

/**
 * 動画を再生するためのプレイヤー
 * @param param0 プレイヤーの設定
 */
const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options }) => {
  const videoNode = React.useRef<HTMLVideoElement>(null);
  const player = React.useRef<videojs.Player>();

  React.useEffect(() => {
    player.current = videojs(videoNode.current!, {
      ...initialOptions,
      ...options,
    }).ready(() => {});

    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return <video ref={videoNode} className="video-js vjs-big-play-centered" />;
};

export default VideoPlayer;
