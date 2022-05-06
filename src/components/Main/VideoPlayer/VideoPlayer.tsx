import React, { useState, useRef } from 'react';
import * as S from './styles';
import { IoPlayCircle, IoPauseCircle } from 'react-icons/io5';

export const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<any>(null);

  const controlVideo = () => {
    const currentVideo = videoRef.current;

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
      <S.Video
        loop
        autoPlay
        muted
        onClick={controlVideo}
        ref={videoRef}
        src="https://player.vimeo.com/progressive_redirect/playback/672684920/rendition/540p/540p.mp4?loc=external&oauth2_token_id=57447761&signature=32cb6b2e5e97333e35129877a0a35748af0bec5798a5066753d36999a017a31a"
      />
      {isPlaying ? (
        <S.ControlButton onClick={controlVideo}>
          <IoPlayCircle className="icon hide" />
        </S.ControlButton>
      ) : (
        <S.ControlButton onClick={controlVideo}>
          <IoPauseCircle className="icon hide" />
        </S.ControlButton>
      )}
    </S.Wrap>
  );
};
