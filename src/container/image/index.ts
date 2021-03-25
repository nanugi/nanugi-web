import callApi from '../../utils/api';

// addImage
export type addImageReq = {
  file: File;
};
export type addImageRes = {};
export const addImage = async function (postId: number, req: addImageReq) {
  const formdata = new FormData();
  formdata.append('file', req.file);

  const res = await callApi.post<FormData, addImageRes>(
    `posts/${postId}/images`,
    formdata,
    true,
  );
  return res;
};
