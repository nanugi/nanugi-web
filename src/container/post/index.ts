import callApi from '../../utils/api';

export type postType = {
  chatUrl: string;
  content: string;
  createdAt: Date;
  maxParti: number;
  minParti: number;
  nanumPrice: number;
  post_id: number;
  price: number;
  title: string;
  user: {
    name: string;
    uid: string;
  };
};

// getPosts
export type getPostsRes = {
  data: {
    next: string;
    page: number;
    posts: postType[];
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
  title: string;
  content: string;
  totalPrice: number;
  nanumPrice: number;
  minParti: number;
  maxParti: number;
  chatUrl: string;
};
export type createPostRes = {
  data: postType;
};
export const createPost = async function (req: createPostReq) {
  const res = await callApi.post<createPostReq, createPostRes>(`posts`, req);
  return res;
};
