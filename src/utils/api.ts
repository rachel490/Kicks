const BASE_URL = 'http://localhost:8080';

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
