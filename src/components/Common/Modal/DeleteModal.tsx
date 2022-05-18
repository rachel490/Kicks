import { useState } from 'react';
import axios from 'axios';
import * as S from './styles';
import { VIDEO_ITEM_API } from 'utils/api';
import { MessageModal } from 'components';

export const DeleteModal = ({
  setIsDeleteModalOpen,
  id
}: {
  setIsDeleteModalOpen: Function;
  id: number;
}) => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const handlDelete = () => {
    axios.delete(VIDEO_ITEM_API(id), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('AC_Token')}`
      }
    });
    // console.log('delete', id);
    setIsMessageModalOpen(true);
  };
  return (
    <>
      {isMessageModalOpen ? (
        <MessageModal
          message="삭제되었습니다"
          redirectTo="/profile"
          isOpen={isMessageModalOpen}
        />
      ) : (
        <S.Overlay isOpen={true}>
          <S.Modal>
            <S.Message>정말 삭제하시겠습니까?</S.Message>
            <S.ButtonContainer>
              <button className="yes" onClick={handlDelete}>
                예
              </button>
              <button
                className="no"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                아니오
              </button>
            </S.ButtonContainer>
          </S.Modal>
        </S.Overlay>
      )}
    </>
  );
};
