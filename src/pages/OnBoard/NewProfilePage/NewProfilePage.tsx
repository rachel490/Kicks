import useSWR from 'swr';
import { USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { IUserData } from 'types';
import { AppContainer, ProfileInputs } from 'components';
import { useProfileForm } from 'hooks/useProfileForm';
import { Button, Buttons, Header } from 'pages/OnBoard/OnBoardingPage/styles';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const NewProfilePage = () => {
  const userId = localStorage.getItem('id');
  const { data: user } = useSWR(
    USER_DATA_API(Number(userId)),
    fetcherWithToken
  );
  const userData = user?.data as IUserData;
  const {
    newImage,
    newName,
    isUpdated,
    handleSubmit,
    handleImageChange,
    handleNameChange
  } = useProfileForm(userData);

  return (
    <AppContainer>
      <Header>프로필 사진과 닉네임을 입력해주세요</Header>
      <S.EditForm onSubmit={handleSubmit}>
        <ProfileInputs
          newImage={newImage}
          newName={newName}
          handleImageChange={handleImageChange}
          handleNameChange={handleNameChange}
        />
        <Buttons>
          <Button>
            <Link to="/">다음에 할게요</Link>
          </Button>
          <Button type="submit" className={newName ? 'active' : ''}>
            프로필 변경!
          </Button>
        </Buttons>
      </S.EditForm>
    </AppContainer>
  );
};
