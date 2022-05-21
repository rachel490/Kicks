import { IChat } from 'types';
import React, { useRef, useState } from 'react';
import * as S from './styles';
import { ReactComponent as UploadIcon } from 'assets/svg/follow.svg';
import { FileUpload } from 'components';

interface Props {
  sendMessage: (message: IChat) => void;
}

export const InputForm = ({ sendMessage }: Props) => {
  const [input, setInput] = useState('');
  const [upload, setUpload] = useState(false);
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
    <S.InputFormContainer>
      <S.FormBox>
        <UploadIcon className="icon" onClick={() => setUpload(!upload)} />
        <S.Form onSubmit={handleSubmit}>
          <S.Input>
            <textarea
              value={input}
              onChange={handleChange}
              onKeyDown={handleEnter}
              ref={textAreaRef}
              placeholder="메세지를 입력하세요"
            />
          </S.Input>
          {input && <S.SendButton>➤</S.SendButton>}
        </S.Form>
      </S.FormBox>
      {upload && <FileUpload />}
    </S.InputFormContainer>
  );
};
