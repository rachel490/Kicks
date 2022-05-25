export interface IUser {
  id: number;
  name: string;
  profile_image_url: string;
}

export interface IUserData {
  create_at: string;
  email: string;
  email_verified: boolean;
  followers: number;
  followings: number;
  id: number;
  last_login_date: string;
  name: string;
  profile_image_url: any;
  videos: number;
}

export interface IChatUser {
  buyerId: number;
  buyerName: string;
  id: number;
  sellerId: number;
  sellerName: string;
}

export interface IChatRoom {
  id: number;
  with_user: IUser;
  chats: IChat[];
}

export interface IChat {
  content: string;
  createAt: string;
  userId: number;
  userName: string;
}

export interface IVideoListItem {
  id: number;
  thumbnail_url: string;
}

export interface IVideoItem {
  id: number;
  video_url: string;
  thumbnail_url: string;
  category: string;
  title: string;
  description: string;
  price: number;
  used_status: boolean;
  view_count: number;
  like_count: number;
  user: {
    id: number;
    name: string;
    profile_image_url: string;
  };
}

export interface IUserAdmin {
  createAt: string;
  email: string;
  emailVerified: boolean;
  id: number;
  lastLoginDate: any;
  modifiedAt: string;
  name: string;
  profileImageUrl: any;
  provider: string;
  role: string;
  userId: number;
}

export interface IFollow {
  id: number;
  member: {
    id: number;
    name: string;
    profile_image_url: string;
  };
}

export interface IData {
  message: string;
  pageInfo: IPageInfo;
}

export interface IPageInfo {
  currentPage: number;
  numberOfElements: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}
