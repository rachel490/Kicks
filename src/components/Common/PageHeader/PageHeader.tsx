import * as S from './styles';

interface Props {
  title: string;
  backTo: string;
}

export const PageHeader = ({ title, backTo }: Props) => {
  return (
    <S.PageHeaderContainer>
      <S.BackIcon to={backTo}>
        <img
          src="https://icons.iconarchive.com/icons/icons8/ios7/512/Arrows-Left-icon.png"
          alt="back_icon"
        />
      </S.BackIcon>
      <S.PageTitle>{title}</S.PageTitle>
    </S.PageHeaderContainer>
  );
};
