import callApi from '../../utils/api';

export type postType = {
  post_id: number;
  user: {
    nickname: string;
    uid: string;
  };
  title: string;
  content: string;
  createdAt: Date;
  detail: {
    price: number;
    nanumPrice: number;
    minParti: number;
    maxParti: number;
    chatUrl: string;
  };
  _close: boolean;
};

export type tinyPostType = {
  _close: boolean;
  maxParti: number;
  minParti: number;
  nanumPrice: number;
  post_id: number;
  thumbnail: string;
  title: string;
  createdAt: Date;
  nickname: string;
};

// getPosts
export type getPostsRes = {
  data: {
    next: string;
    page: number;
    posts: tinyPostType[];
    previous: string;
    size: number;
  };
};
export const getPosts = async function (page: number) {
  const res = await callApi.get<{}, getPostsRes>(`posts?page=${page}`);
  return res;
};

// getPost
export type getPostRes = {
  data: postType;
};
export const getPost = async function (id: number) {
  const res = await callApi.get<{}, getPostRes>(`posts/${id}`);
  return res;
};

// createPost
export type createPostReq = {
  chatUrl: string;
  content: string;
  minParti: number;
  title: string;
  totalPrice: number;
};
export type createPostRes = {
  data: postType;
};
export const createPost = async function (req: createPostReq) {
  const res = await callApi.post<createPostReq, createPostRes>(`posts`, req);
  return res;
};
