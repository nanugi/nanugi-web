import callApi from '../../utils/api';

// toggleFavsByPostId
export type toggleFavsByPostIdReq = {};
export type toggleFavsByPostIdRes = {};
export const toggleFavsByPostId = async function (postId: number) {
  const res = await callApi.put<toggleFavsByPostIdReq, toggleFavsByPostIdRes>(
    `favs/${postId}`,
    {},
  );
  return res;
};
