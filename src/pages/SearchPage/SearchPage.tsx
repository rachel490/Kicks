import { AdBanner, SearchBar } from 'components';
import * as S from './styles';

export const SearchPage = () => {
  return (
    <S.Wrap>
      <SearchBar />
      <AdBanner height="150px" />
    </S.Wrap>
  );
};
