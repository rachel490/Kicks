import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

interface Props {
  id: number,
  url: string;
  currentVideoRef: any;
  setCurrentVideoRef: Function;
}

export const VideoItem = ({
  id,
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
      <Link to={`/video/${id}`}>
        <video onMouseOver={playMovie} src={url} muted loop ref={videoRef} />
      </Link>
    </S.Wrap>
  );
};
