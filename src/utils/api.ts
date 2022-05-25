// const BASE_URL = 'http://localhost:8080';
const BASE_URL = 'https://www.numble-kicks.shop';
// const BASE_URL = 'http://13.209.18.253:8080';

// Chat Page
export const WS_CONNECT_API = 'ws://13.209.18.253:8080/ws-connection/websocket';
export const CHAT_LIST_API = `${BASE_URL}/rooms`;
export const CHAT_ROOM_API = (room_id: number) =>
  `${BASE_URL}/rooms/${room_id}/messages?messageId=&size=20`;
export const SEND_MESSAGE_API = (room_id: number) => `/pub/rooms/${room_id}`;
export const GET_MESSAGE_API = (room_id: number) => `/sub/rooms/${room_id}`;

// Profile Page
export const USER_DATA_API = (user_id: number) =>
  `${BASE_URL}/v1/users/${user_id}`;
export const MY_VIDEOS_API = (user_id: number) =>
  `${BASE_URL}/v1/users/${user_id}/videos?`;
export const MY_LIKES_API = (user_id: number) =>
  `${BASE_URL}/v1/users/${user_id}/likes?`;
export const FOLLOWING_API = (user_id: number) =>
  `${BASE_URL}/v1/users/following/from?from_member=${user_id}`;
export const FOLLOWER_API = (user_id: number) =>
  `${BASE_URL}/v1/users/following/to?to_member=${user_id}`;

// Video
export const VIDEO_ITEM_API = (video_id: number) =>
  `${BASE_URL}/v1/videos/${video_id}`;
export const VIDEO_LIST_API = `${BASE_URL}/v1/videos`;
export const USERS_VIDEO_API = (user_id: number) =>
  `${BASE_URL}/v1/users/${user_id}/videos?last_id=`;

// Search Page
export const TOP10_VIDEO_API = (sortBy: 'hits' | 'likes') =>
  `${BASE_URL}/v1/videos/status-condition?sortBy=${sortBy}`;
export const SEARCHED_VIDEO_API = (keyword: string, sortBy: 'hits' | null) =>
  `${BASE_URL}/v1/videos/search-condition?keyword=${keyword}&sortBy=${sortBy}&`;

// Login Page
export const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
export const KAKAO_REDIRECT_URI = `https://numble-kicks.vercel.app/oauth/callback`;
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
export const TOKEN_API = `${BASE_URL}/login/oauth2/code/kakao`;

// Liked
export const LIKE_API = (video_id: number) =>
  `${BASE_URL}/v1/videos/${video_id}/likes`;
export const UNLIKE_API = (video_id: number) =>
  `${BASE_URL}/v1/videos/likes/${video_id}`;

// Follow
export const FOLLOW_API = (user_id: number) =>
  `${BASE_URL}/v1/users/following/${user_id}`;

// Admin Page
export const ADMIN_USER_API = (keyword: string) =>
  `${BASE_URL}/v1/users?keyword=${keyword}`;
export const ADMIN_CONTENT_API = (page: number, size: number, id: string) =>
  `${BASE_URL}/v1/admin/videos?page=${page}&size=${size}&user_id=${id}`;
