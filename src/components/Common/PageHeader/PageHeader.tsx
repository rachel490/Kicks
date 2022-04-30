import * as S from './styles';

interface Props {
  title: string;
}

export const PageHeader = ({ title }: Props) => {
  return (
    <S.PageHeaderContainer>
      <S.BackIcon to="/chats">
        <img
          src="https://icons.iconarchive.com/icons/icons8/ios7/512/Arrows-Left-icon.png"
          alt="back_icon"
        />
      </S.BackIcon>
      <S.PageTitle>{title}</S.PageTitle>
    </S.PageHeaderContainer>
  );
};
