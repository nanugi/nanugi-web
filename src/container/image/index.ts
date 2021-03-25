import callApi from '../../utils/api';

export type imageType = {
  id: number;
  url: string;
};

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

// getImageByPostId
export type getImageByPostIdRes = {
  data: {
    count: number;
    images: imageType[];
  };
};
export const getImageByPostId = async function (postId: number) {
  const res = await callApi.get<{}, getImageByPostIdRes>(
    `posts/${postId}/images`,
  );
  return res;
};
