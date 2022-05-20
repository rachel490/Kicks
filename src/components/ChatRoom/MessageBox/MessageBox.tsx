import { IChat } from 'types';
import React, { useRef, useState } from 'react';
import * as S from './styles';

interface Props {
  sendMessage: (message: IChat) => void;
  setToBottom: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MessageBox = ({ sendMessage, setToBottom }: Props) => {
  const [input, setInput] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const INPUT_HEIGHT = '30px';

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    if (input) {
      sendMessage({
        sender: 'me',
        content: input,
        send_at: new Date()
      });
      setToBottom(true);
      setInput('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textAreaRef.current) {
      if (
        Number(textAreaRef.current.style.height.replace(/[^0-9]/g, '')) <= 80
      ) {
        textAreaRef.current.style.height = INPUT_HEIGHT;
        textAreaRef.current.style.height =
          textAreaRef.current.scrollHeight + 'px';
      }
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        handleSubmit(e);
        if (textAreaRef.current) {
          textAreaRef.current.style.height = INPUT_HEIGHT;
        }
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
        <S.InputContainer>
          <textarea
            value={input}
            onChange={handleChange}
            onKeyDown={handleEnter}
            ref={textAreaRef}
            placeholder="메세지를 입력하세요"
          />
        </S.InputContainer>
        <S.SendButton className={input ? 'active' : ''}>➤</S.SendButton>
      </S.Form>
    </S.MessageBoxContainer>
  );
};
