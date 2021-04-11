import callApi from '../../utils/api';
import { tinyPostType } from '../post';

// toggleFavsByPostId
export type toggleFavsByPostIdReq = {};
export type toggleFavsByPostIdRes = {};
export const toggleFavsByPostId = async function (postId: number) {
  const res = await callApi.put<toggleFavsByPostIdReq, toggleFavsByPostIdRes>(
    `favs?postId=${postId}`,
    {},
  );
  return res;
};

// getPostOfFavs
export type getPostOfFavsRes = {
  list: tinyPostType[];
};
export const getPostOfFavs = async function () {
  const res = await callApi.get<{}, getPostOfFavsRes>(`favs`);
  return res;
};
