import React from 'react';
import * as S from './styles';
import { IChat } from 'types';
import dayjs from 'dayjs';
import { ProfileImage } from 'components/Common/ProfileImage/ProfileImage';

interface Prop {
  profile: string;
  message: IChat;
}

export const MessageItem = ({ profile, message }: Prop) => {
  const { userName, content, createAt } = message;
  const myName = localStorage.getItem('name');

  return userName === myName ? (
    <S.MessageItemContainer className="my-message">
      <span>{dayjs(createAt).format('A h:mm')}</span>
      <p>{content}</p>
    </S.MessageItemContainer>
  ) : (
    <S.MessageItemContainer>
      <ProfileImage size="35" url={profile} />
      <p>{content}</p>
      <span>{dayjs(createAt).format('A h:mm')}</span>
    </S.MessageItemContainer>
  );
};
