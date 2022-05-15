const BASE_URL = 'http://localhost:8080';
// const BASE_URL = 'https://numble-kicks.shop";
// const BASE_URL = 'http://13.209.18.253:8080';

// Chat Page
export const CHAT_LIST_API = `${BASE_URL}/v1/users/chatting`;
export const CHAT_ROOM_API = (chat_room_id: number) =>
  `${BASE_URL}/v1/users/chatting/${chat_room_id}`;

// Profile Page
// my -> :userId로 대체
export const MY_VIDEOS_API = `${BASE_URL}/v1/users/my/videos`;
export const MY_LIKES_API = `${BASE_URL}/v1/users/my/likes`;
export const FOLLOWING_API = `${BASE_URL}/v1/users/following/from`;
export const FOLLOWER_API = `${BASE_URL}/v1/users/following/to`;

// Main Page (영상 재생)
export const VIDEO_ITEM_API = (video_id: number) =>
  `${BASE_URL}/v1/videos/${video_id}`;

export const VIDEO_LIST_API = `${BASE_URL}/v1/videos`;

// Search Page
export const RECOMMENDED_VIDEO_API = `${BASE_URL}/v1/videos`;
export const POPULAR_VIDEO_API = `${BASE_URL}/v1/videos`;

// Upload Page
export const UPLOAD_VIDEO_API = `${BASE_URL}/v1/videos`;

// Login Page
export const API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
export const KAKAO_REDIRECT_URI = 'http://localhost:3000/oauth/callback';
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
// export const TOKEN_API = `${BASE_URL}/login/oauth2/code/kakao`;
export const TOKEN_API = `http://13.209.18.253:8080/login/oauth2/code/kakao`;

// Delete Page
export const DELETE_VIDEO_API = (video_id: number) =>
  `${BASE_URL}/v1/videos/${video_id}`;
