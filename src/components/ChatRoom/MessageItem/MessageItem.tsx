import React from 'react';
import * as S from './styles';
import { IChat } from 'data/types';
import dayjs from 'dayjs';

interface Prop {
  profile: string;
  message: IChat;
}

export const MessageItem = ({ profile, message }: Prop) => {
  const { sender, content, send_at } = message;

  return sender === 'me' ? (
    <S.MessageItemContainer className="my-message">
      <span>{dayjs(send_at).format('h:mm A')}</span>
      <p>{content}</p>
    </S.MessageItemContainer>
  ) : (
    <S.MessageItemContainer>
      <img src={profile} alt="profile" />
      <p>{content}</p>
      <span>{dayjs(send_at).format('h:mm A')}</span>
    </S.MessageItemContainer>
  );
};
