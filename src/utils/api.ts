const BASE_URL = 'https://d0281c4b-3ebc-4789-8f00-ce823cf44c52.mock.pstmn.io';

// Chat Page
export const CHAT_LIST_API = `${BASE_URL}/v1/users/chatting`;
export const CHAT_ROOM_API = (chat_room_id: number) =>
  `${BASE_URL}/v1/users/chatting/:${chat_room_id}`;

