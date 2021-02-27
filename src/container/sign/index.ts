import callApi from '../../utils/api';
import callCookie from '../../utils/cookie';

// login
export type loginReq = {
  id: string;
  password: String;
};
export type loginRes = {
  data: string;
};
export const login = async function (req: loginReq) {
  const res = await callApi.post<loginReq, loginRes>('signin', req);
  if (res?.success) {
    callCookie.set('jwt', res.data, 2);
  }
  return res;
};

// signup
export type signupReq = {
  id: string;
  name: string;
  password: string;
};
export type signupRes = {
  data: string;
};
export const signup = async function (req: signupReq) {
  const res = await callApi.post<signupReq, signupRes>('signup', req);
  return res;
};

// email-verification
export const emailVerification = async (code: string) => {
  const res = await callApi.get(`email-verification?code=${code}`);
  return res;
};
