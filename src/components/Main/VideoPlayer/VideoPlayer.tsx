import React, { useState, useRef } from 'react';
import * as S from './styles';
import { IoPlayCircle, IoPauseCircle } from 'react-icons/io5';

interface Prop {
  video_url: string;
}

export const VideoPlayer = ({ video_url }: Prop) => {
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
        src={video_url}
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
