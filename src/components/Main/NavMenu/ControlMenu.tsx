import React, { useState } from 'react';
import * as S from './styles';
import { DeleteModal } from 'components';

export const ControlMenu = ({ id }: { id: number }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsDeleteModalOpen(true);
  };

  return (
    <S.Wrap isShown={true} className="controller">
      {isDeleteModalOpen ? ( 
        <DeleteModal setIsDeleteModalOpen={setIsDeleteModalOpen} id={id}/>
      ) : (
        <>
          <S.Button className="control" onClick={handleDelete}>
            삭제
          </S.Button>
          <S.Button className="control">수정</S.Button>
        </>
      )}
    </S.Wrap>
  );
};
