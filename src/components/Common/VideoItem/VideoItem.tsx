import React, { useRef } from 'react';
import * as S from './styles';

interface Props {
  url: string;
  currentVideoRef: any;
  setCurrentVideoRef: Function;
}

export const VideoItem = ({
  url,
  setCurrentVideoRef,
  currentVideoRef
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playMovie = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
    if (currentVideoRef && currentVideoRef !== videoRef.current) {
      currentVideoRef.pause();
    }
    setCurrentVideoRef(videoRef.current);
  };

  return (
    <S.Wrap>
      <video onMouseOver={playMovie} src={url} muted loop ref={videoRef} />
    </S.Wrap>
  );
};
