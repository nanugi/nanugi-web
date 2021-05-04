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
    totalPrice: number;
    minParti: number;
    maxParti: number;
    chatUrl: string;
    liked: number;
  };
  _close: boolean;
  _myfav: boolean;
};

export type tinyPostType = {
  _close: boolean;
  maxParti: number;
  minParti: number;
  totalPrice: number;
  post_id: number;
  thumbnail: string;
  title: string;
  createdAt: Date;
  nickname: string;
  liked: number;
};
export const postToTinyPost = (post: postType): tinyPostType => ({
  _close: post._close,
  maxParti: post.detail.maxParti,
  minParti: post.detail.minParti,
  totalPrice: post.detail.totalPrice,
  post_id: post.post_id,
  thumbnail: '',
  title: post.title,
  createdAt: post.createdAt,
  nickname: post.user.nickname,
  liked: post.detail.liked,
});

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

export const searchPosts = async function (page: number, keyword: string) {
  const res = await callApi.get<{}, getPostsRes>(`posts?page=${page}&search=${keyword}`);
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

// modifyPost
export type modifyPostReq = {
  chatUrl: string;
  content: string;
  minParti: number;
  title: string;
  totalPrice: number;
};
export type modifyPostRes = {
  data: postType;
};
export const modifyPost = async function (req: modifyPostReq, id: number) {
  const res = await callApi.put<modifyPostReq, modifyPostRes>(
    `posts/${id}`,
    req,
  );
  return res;
};

// closePost
export type closePostReq = {};
export type closePostRes = {};
export const closePost = async function (postId: number) {
  const res = await callApi.put<closePostReq, closePostRes>(
    `posts/${postId}/close`,
    {},
  );
  return res;
};
