import callApi from '../../utils/api';

// addImage
export type addImageReq = {
  file: File;
};
export type addImageRes = {};
export const addImage = async function (postId: number, req: addImageReq) {
  const res = await callApi.post<addImageReq, addImageRes>(
    `posts/${postId}/images`,
    req,
  );
  return res;
};
