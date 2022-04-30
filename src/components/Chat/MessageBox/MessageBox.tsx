import { IChat } from 'data/types';
import React, { useState } from 'react';
import * as S from './styles';

interface Props {
  sendMessage: (message: IChat) => void;
}

export const MessageBox = ({ sendMessage }: Props) => {
  const [input, setInput] = useState('');

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    sendMessage({
      sender: 'me',
      content: input,
      send_at: new Date()
    });
    console.log(input);
    setInput('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        handleSubmit(e);
      }
    }
  };

  return (
    <S.MessageBoxContainer>
      <img
        src="https://cdn-icons-png.flaticon.com/512/59/59565.png"
        alt="add"
      />
      <S.Form onSubmit={handleSubmit}>
        <S.ChatTextArea
          value={input}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder="메세지를 입력하세요"
        />
        {input && <S.SendButton>➤</S.SendButton>}
      </S.Form>
    </S.MessageBoxContainer>
  );
};
