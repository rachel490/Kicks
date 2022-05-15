const BASE_URL = 'http://localhost:8080';
// const BASE_URL = 'https://numble-kicks.shop";
// const BASE_URL = 'http://13.209.18.253:8080';

// CHAT
export const CHAT_LIST_API = `${BASE_URL}/v1/users/chatting`;
export const CHAT_ROOM_API = (chat_room_id: number) =>
  `${BASE_URL}/v1/users/chatting/${chat_room_id}`;

// PROFILE
export const PROFILE_API = (user_id: number) =>
  `${BASE_URL}/v1/users/${user_id}`;
export const PROFILE_IMAGE_API = `${BASE_URL}/v1/users/image`;
export const PROFILE_NICKNAME_API = `${BASE_URL}/v1/users/name`;
export const SEND_EMAIL_CONFIRM_API = `${BASE_URL}/v1/users/email/auth`;
export const EMAIL_CONFIRM_API = `${BASE_URL}/v1/users/email`;
export const MY_VIDEOS_API = (user_id: number, last_id?: number) =>
  `${BASE_URL}/v1/users/${user_id}/videos?last_id=${last_id}`;
export const MY_LIKES_API = (user_id: number, last_id?: number) =>
  `${BASE_URL}/v1/users/${user_id}/likes?last_id=${last_id}`;
export const WITHDRAWAL_API = `${BASE_URL}/v1/users`;

// FOLLOW
export const FOLLOW_API = (to_user_id: number) =>
  `${BASE_URL}/v1/users/following/${to_user_id}`;
export const FOLLOWING_API = (from_member: number) =>
  `${BASE_URL}/v1/users/following/from?from_member=${from_member}`;
export const FOLLOWER_API = (to_member: number) =>
  `${BASE_URL}/v1/users/following/to?to_member=${to_member}`;

// VIDEO
export const VIDEO_LIST_API = `${BASE_URL}/v1/videos`;
export const VIDEO_ITEM_API = (video_id: number) =>
  `${BASE_URL}/v1/videos/${video_id}`;

// SEARCH
export const VIDEO_SEARCH_API = (
  sortBy?: string,
  keyword?: string,
  last_id?: number
) =>
  `${BASE_URL}/v1/videos/keyword-condition?keyword=${keyword}&sortBy=${sortBy}&last_id=${last_id}`;
export const BEST_VIDEO_API = (sortBy: string) =>
  `${BASE_URL}/v1/videos/satatus-condition?sortBy=${sortBy}`;

// LOGIN/LOGOUT
export const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
export const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback';
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
// export const TOKEN_API = `${BASE_URL}/login/oauth2/code/kakao`;
export const TOKEN_API = `http://13.209.18.253:8080/login/oauth2/code/kakao`;
export const TOKEN_RENEW_API = `${BASE_URL}/renew`;
export const LOGOUT_API = `${BASE_URL}/logout`;

// LIKE
export const LIKE_API = (video_id: number) =>
  `${BASE_URL}/v1/videos/${video_id}/likes`;
export const DISLIKE_API = (video_id: number) =>
  `${BASE_URL}/v1/videos/likes/${video_id}`;

// ADMIN
export const ADMIN_USER_API = (parameter?: string) =>
  `${BASE_URL}/v1/admin/users?parameter=${parameter}`;
export const ADMIN_VIDEO_API = (page: number, size: number) =>
  `${BASE_URL}/v1/admin/videos?page=${page}&size=${size}`;

// ETC
export const CATEGORY_LIST_API = `${BASE_URL}/v1/categories`;
