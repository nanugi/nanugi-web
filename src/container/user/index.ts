import callApi from '../../utils/api';
import callCookie from '../../utils/cookie';
import { getPostsRes } from '../post';

export interface BaseResponse<T> {
  data: T;
}

export interface User {
  name: string;
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

export const updateProfile = async (name: string) => {
  const res = await callApi.post<{ name: string }, BaseResponse<User>>(
    '/user',
    {
      name,
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
