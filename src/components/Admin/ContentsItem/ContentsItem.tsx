import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

interface Prop {
  id: number;
  thumbnail_url: string;
  title: string;
  nickname: string;
  column: string;
}

export const ContentsItem = ({
  id,
  thumbnail_url,
  title,
  nickname,
  column
}: Prop) => {
  const handleDelete = () => {
    alert('정말 삭제하시겠습니까?');
  };

  return (
    <S.Wrap className={`${column}`}>
      <img src={thumbnail_url} alt={title} />
      <span className="title">{title}</span>
      <span className="nickname">{nickname}</span>
      <S.Buttons>
        <Link to={`/admin/contents/edit/${id}`}>
          <button className="editBtn">수정</button>
        </Link>
        <button className="deleteBtn" onClick={handleDelete}>
          삭제
        </button>
      </S.Buttons>
    </S.Wrap>
  );
};
