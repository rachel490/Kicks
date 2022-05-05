import React, { useState } from 'react';
import * as S from './styles';
import { IoPlayCircle, IoPauseCircle } from 'react-icons/io5';

export const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const controlVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    const currentVideo = e.currentTarget;

    if (!currentVideo) {
      return;
    }

    if (!isPlaying) {
      currentVideo.play();
      setIsPlaying(true);
    } else {
      currentVideo.pause();
      setIsPlaying(false);
    }
  };

  return (
    <S.Wrap>
      <video
        loop
        autoPlay
        muted
        onClick={controlVideo}
        src="https://player.vimeo.com/progressive_redirect/playback/672684920/rendition/540p/540p.mp4?loc=external&oauth2_token_id=57447761&signature=32cb6b2e5e97333e35129877a0a35748af0bec5798a5066753d36999a017a31a"
      />
      {isPlaying ? (
        <button>
          <IoPlayCircle className="icon hide" />
        </button>
      ) : (
        <button>
          <IoPauseCircle className="icon hide" />
        </button>
      )}
    </S.Wrap>
  );
};
