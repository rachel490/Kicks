const BASE_URL = 'http://localhost:8080';

// Chat Page
export const CHAT_LIST_API = `${BASE_URL}/v1/users/chatting`;
export const CHAT_ROOM_API = (chat_room_id: number) =>
  `${BASE_URL}/v1/users/chatting/${chat_room_id}`;
