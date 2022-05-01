import { useParams } from 'react-router-dom';
import { AppContainer, MessageBox, MessageList, PageHeader } from 'components';
import { chatData } from 'data';
import { useState } from 'react';
import { IChat } from 'data/types';
import { dividedByDate } from 'utils/dividedByDate';

export const ChatRoomPage = () => {
  const [toBottom, setToBottom] = useState(false);
  const { id } = useParams();
  const userData = chatData.filter(chat => chat.id === Number(id));
  const [messages, setMessages] = useState(userData[0].chats);
  const { name, profile_image_url } = userData[0].with_user;

  const sections = dividedByDate(messages);

  const sendMessage = (message: IChat) => {
    setMessages([...messages, message]);
  };

  return (
    <AppContainer>
      <PageHeader title={name} backTo="/chats" />
      <MessageList
        sections={sections}
        profile={profile_image_url}
        toBottom={toBottom}
      />
      <MessageBox sendMessage={sendMessage} setToBottom={setToBottom} />
    </AppContainer>
  );
};
