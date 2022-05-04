import { useParams } from 'react-router-dom';
import { AppContainer, MessageBox, MessageList, PageHeader } from 'components';
import { useState } from 'react';
import { IChat, IChatRoom } from 'data/types';
import { dividedByDate } from 'utils/dividedByDate';
import { CHAT_ROOM_API } from 'utils/api';
import { fetcher } from 'utils/swr';
import useSWR from 'swr';

export const ChatRoomPage = () => {
  const [toBottom, setToBottom] = useState(false);
  const { id } = useParams();
  const { data, error } = useSWR<IChatRoom>(CHAT_ROOM_API(Number(id)), fetcher);
  const name = data?.with_user?.name || '';
  const profile = data?.with_user?.profile_image_url || '';

  const [messages, setMessages] = useState<IChat[]>(data?.chats || []);
  const sections = dividedByDate(messages);

  const sendMessage = (message: IChat) => {
    setMessages([...messages, message]);
  };

  return (
    <AppContainer>
      <PageHeader title={name} backTo="/chats" />
      <MessageList sections={sections} profile={profile} toBottom={toBottom} />
      <MessageBox sendMessage={sendMessage} setToBottom={setToBottom} />
    </AppContainer>
  );
};
