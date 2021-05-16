import callApi from '../../utils/api';
import callCookie from '../../utils/cookie';
import { getPostsRes } from '../post';

export interface BaseResponse<T> {
  data: T;
}

export interface User {
  nickname: string;
  uid: string;
}

export const fetchProfile = async () => {
  const res = await callApi.get<{}, BaseResponse<User>>('users/me');
  return res;
};

export const resignUser = async () => {
  const res = await callApi.delete<{}, BaseResponse<undefined>>('user', {});
  return res;
};

export const logOut = () => {
  callCookie.delete('staySignedIn');
  callCookie.delete('jwt');
};

export const updateProfile = async (nickname: string) => {
  const res = await callApi.put<{ nickname: string }, BaseResponse<User>>(
    'user',
    {
      nickname,
    },
  );
  return res;
};

export const getMyposts = async function (page: number) {
  const res = await callApi.get<{}, getPostsRes>(
    `users/me/myposts?page=${page}`,
  );
  return res;
};

export const getUser = async function (id: string) {
  const res = await callApi.get<{}, BaseResponse<User>>(`users/${id}`);
  return res;
};

export const getOthersPosts = async function (nickname: string, page: number) {
  const res = await callApi.get<{}, getPostsRes>(
    `users/posts?page=${page}&nickname=${nickname}`,
  );
  return res;
};
