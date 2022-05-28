import { ProfileImage } from 'components';
import * as S from './styles';
import { BsCameraFill } from 'react-icons/bs';

interface Props {
  newImage: { url: string; file: File };
  newName: string;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileInputs = ({
  newImage,
  newName,
  handleImageChange,
  handleNameChange
}: Props) => {
  return (
    <S.InputContainer>
      <input
        type="file"
        accept="image/*"
        id="profile"
        onChange={handleImageChange}
      />
      <S.ImageInput htmlFor="profile">
        <ProfileImage size="140" url={newImage.url || ''} />
        <label htmlFor="profile">
          <BsCameraFill />
        </label>
      </S.ImageInput>
      <S.NameInput
        type="text"
        value={newName || ''}
        onChange={handleNameChange}
        autoFocus
      />
    </S.InputContainer>
  );
};
