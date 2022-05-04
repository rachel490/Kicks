import React from 'react';
import * as S from './styles';

export const VideoPlayer = () => {

  const controlVideo = (e: React.MouseEvent<HTMLVideoElement>) => {
    const currentVideo = e.currentTarget;

    if (!currentVideo) {return};
    
    if (currentVideo.paused) {
      currentVideo.play();
    } else {
      currentVideo.pause();
    }
  } 


  return (
    <S.Wrap>
      <video
        loop
        autoPlay
        muted
        onClick={controlVideo}
        src="https://player.vimeo.com/progressive_redirect/playback/672684920/rendition/540p/540p.mp4?loc=external&oauth2_token_id=57447761&signature=32cb6b2e5e97333e35129877a0a35748af0bec5798a5066753d36999a017a31a"
      ></video>
    </S.Wrap>
  );
};
