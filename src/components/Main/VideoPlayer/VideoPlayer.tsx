import React, { useState, useRef } from 'react';
import * as S from './styles';
import { IoPlayCircle, IoPauseCircle } from 'react-icons/io5';

interface Prop {
  video_url: string;
  isShown: boolean;
  setIsShown: Function;
}

export const VideoPlayer = ({ video_url, isShown, setIsShown }: Prop) => {
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

  const handleClick = () => {
    if (isShown === false) {
      setIsShown(true);
    }
  };

  return (
    <S.Wrap onClick={handleClick}>
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
