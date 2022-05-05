import { useState } from 'react';
import * as S from './styles';

interface Props {
  height: string;
}

export const AdBanner = ({ height }: Props) => {
  const [showAd, setShowAd] = useState(true);
  const closeBanner = () => setShowAd(false);

  return (
    <S.AdBannerContainer
      style={{ display: `${showAd ? 'block' : 'none'}`, height: height }}
    >
      <img
        src="https://user-images.githubusercontent.com/68415905/166094331-9f7d2190-2b70-45f7-a5f2-f2c4acf4a3c2.JPG"
        alt="ad"
      />
      <S.CloseButton onClick={closeBanner}>X</S.CloseButton>
    </S.AdBannerContainer>
  );
};
