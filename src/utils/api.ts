const BASE_URL = 'http://localhost:8080';
// const BASE_URL = 'https://numble-kicks.shop";
// const BASE_URL = 'http://13.209.18.253:8080';

export const USER_DATA_API = (user_id: number) =>
  `http://13.209.18.253:8080/v1/users/${user_id}`;

// Chat Page
export const CHAT_LIST_API = `${BASE_URL}/v1/users/chatting`;
export const CHAT_ROOM_API = (chat_room_id: number) =>
  `${BASE_URL}/v1/users/chatting/${chat_room_id}`;

// Profile Page
// my -> :userId로 대체
export const MY_VIDEOS_API = `${BASE_URL}/v1/users/my/videos`;
export const MY_LIKES_API = `${BASE_URL}/v1/users/my/likes`;
export const FOLLOWING_API = (user_id: number) =>
  `http://13.209.18.253:8080/v1/users/following/from?from_member=${user_id}`;
export const FOLLOWER_API = (user_id: number) =>
  `http://13.209.18.253:8080/v1/users/following/to?to_member=${user_id}`;

// Video
// export const VIDEO_ITEM_API = (video_id: number) =>
//   `${BASE_URL}/v1/videos/${video_id}`;
export const VIDEO_ITEM_API = (video_id: number) =>
  `http://13.209.18.253:8080/v1/videos/${video_id}`;
// export const VIDEO_LIST_API = `${BASE_URL}/v1/videos`;
export const VIDEO_LIST_API = 'http://13.209.18.253:8080/v1/videos';
export const USERS_VIDEO_API = (user_id: number) =>
  `http://13.209.18.253:8080/v1/users/${user_id}/videos?last_id=`;

// Search Page
export const TOP10_VIDEO_API = (sortBy: 'hits' | 'likes') =>
  `http://13.209.18.253:8080/v1/videos/status-condition?sortBy=${sortBy}`;
export const SEARCHED_VIDEO_API = (keyword: string, sortBy: 'hits' | null) =>
  `http://13.209.18.253:8080/v1/videos/keyword-condition?keyword=${keyword}&sortBy=${sortBy}`;

// Login Page
export const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
export const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback';
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
// export const TOKEN_API = `${BASE_URL}/login/oauth2/code/kakao`;
export const TOKEN_API = `http://13.209.18.253:8080/login/oauth2/code/kakao`;

// Liked
// export const LIKE_API = `${BASE_URL}/v1/videos/:video_id/likes`;
export const LIKE_API = (video_id: number) =>
  `http://13.209.18.253:8080/v1/videos/${video_id}/likes`;
export const UNLIKE_API = (video_id: number) =>
  `http://13.209.18.253:8080/v1/videos/likes/${video_id}`;

// Admin Page
export const ADMIN_USER_API = (keyword: string) =>
  `http://13.209.18.253:8080/v1/users?keyword=${keyword}`;
export const ADMIN_CONTENT_API = (page: number, size: number, id: string) =>
  `http://13.209.18.253:8080/v1/admin/videos?page=${page}&size=${size}&user_id=${id}`;
