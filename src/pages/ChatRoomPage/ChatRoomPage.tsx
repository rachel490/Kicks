import { useParams } from 'react-router-dom';
import { AppContainer, PageHeader } from 'components';
import { chatData } from 'data';

export const ChatRoomPage = () => {
  const { id } = useParams();
  const userData = chatData.filter(chat => chat.id === Number(id));
  const { name } = userData[0].with_user;

  return (
    <AppContainer>
      <PageHeader title={name} />
    </AppContainer>
  );
};
