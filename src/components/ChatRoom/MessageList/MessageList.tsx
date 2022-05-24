import React, { useEffect, useRef, useState } from 'react';
import { IChat } from 'types';
import { MessageItem } from 'components';
import { Scrollbars } from 'react-custom-scrollbars';
import * as S from './styles';
import { dividedByDate } from 'utils/dividedByDate';
import { CHAT_ROOM_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import useSWR from 'swr';

interface Prop {
  profile: string;
  roomId: number;
}

export const MessageList = ({ profile, roomId }: Prop) => {
  const [sections, setSections] = useState<[string, IChat[]][]>([]);
  const scrollbarRef = useRef<Scrollbars>(null);
  const { data: messages } = useSWR(CHAT_ROOM_API(roomId), fetcherWithToken);
  const messageData = messages?.data as IChat[];

  useEffect(() => {
    if (messageData) setSections(dividedByDate(messageData));
  }, [messageData]);

  useEffect(() => {
    scrollbarRef.current?.scrollToBottom();
  }, [sections]);

  return (
    <S.MessageListContainer>
      <Scrollbars autoHide ref={scrollbarRef}>
        {sections.map(([date, chatData]) => (
          <S.DateSection key={date}>
            <S.Date>{date}</S.Date>
            {chatData.map((message, i) => (
              <MessageItem key={i} message={message} profile={profile} />
            ))}
          </S.DateSection>
        ))}
      </Scrollbars>
    </S.MessageListContainer>
  );
};
