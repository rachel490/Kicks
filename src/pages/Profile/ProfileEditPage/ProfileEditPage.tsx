import * as S from './styles';
import useSWR from 'swr';
import { USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import { IUserData } from 'types';
import { AppContainer, PageHeader, ProfileInputs } from 'components';
import { useProfileForm } from 'hooks/useProfileForm';

export const ProfileEditPage = () => {
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
      <PageHeader title="프로필 수정" backTo={`/${newName}`} />
      <S.EditForm onSubmit={handleSubmit}>
        <ProfileInputs
          newImage={newImage}
          newName={newName}
          handleImageChange={handleImageChange}
          handleNameChange={handleNameChange}
        />
        <span>프로필 사진과 닉네임을 입력해주세요</span>
        <S.SubmitButton type="submit" className={isUpdated ? 'active' : ''}>
          완료
        </S.SubmitButton>
      </S.EditForm>
    </AppContainer>
  );
};
