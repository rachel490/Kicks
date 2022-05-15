import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { VIDEO_ITEM_API } from 'utils/api';
import * as S from './styles';

export const DeleteModal = ({
  setIsDeleteModalOpen,
  id
}: {
  setIsDeleteModalOpen: Function;
  id: number;
}) => {
  const navigate = useNavigate();
  const handlDelete = () => {
    // axios.delete(VIDEO_ITEM_API(id), {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
    //   }
    // });
    console.log('delete', id);
    navigate('/profile');
  };
  return (
    <S.Overlay>
      <S.Modal>
        <S.Message>정말 삭제하시겠습니까?</S.Message>
        <S.ButtonContainer>
          <button className="yes" onClick={handlDelete}>
            예
          </button>
          <button className="no" onClick={() => setIsDeleteModalOpen(false)}>
            아니오
          </button>
        </S.ButtonContainer>
      </S.Modal>
    </S.Overlay>
  );
};
