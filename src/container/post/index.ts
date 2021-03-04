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
