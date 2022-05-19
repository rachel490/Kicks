import { ContentsWrap } from 'components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';

export const PlayPage = () => {
  const [active, setActive] = useState(true);
  const { videoId } = useParams();
	console.log(videoId);

  return (
    <S.Wrap>
      <ContentsWrap
        videoId={Number(videoId)}
        active={active}
        setActive={setActive}
      />
    </S.Wrap>
  );
};
