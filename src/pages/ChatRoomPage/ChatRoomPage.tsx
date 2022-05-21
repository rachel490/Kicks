import { useLocation, useParams } from 'react-router-dom';
import { AppContainer, InputForm, MessageList, PageHeader } from 'components';
import { IChat, IUserData } from 'types';
import { CHAT_ROOM_API, USER_DATA_API } from 'utils/api';
import { fetcherWithToken } from 'utils/swr';
import useSWR from 'swr';

export const ChatRoomPage = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const { data: messages } = useSWR(CHAT_ROOM_API(id || ''), fetcherWithToken);
  const { data: user } = useSWR(
    USER_DATA_API(state as number),
    fetcherWithToken
  );

  const userData = user?.data as IUserData;
  const messageData = messages?.data as IChat[];
  const { name, profile_image_url } = userData;

  return (
    <AppContainer>
      <PageHeader title={name} backTo="/chats" />
      <MessageList profile={profile_image_url} messageData={messageData} />
      <InputForm />
    </AppContainer>
  );
};
