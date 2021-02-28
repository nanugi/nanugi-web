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
  const res = await callApi.get<{}, {}>(`email-verification?code=${code}`);
  return res;
};

// send-certcode
export type sendCertcodeReq = string;
export const sendCertcode = async (req: sendCertcodeReq) => {
  const res = await callApi.post<sendCertcodeReq, {}>('send-certcode', req);
  return res;
};

// set-new-password
export type setNewPasswordReq = {
  code: string;
  password: string;
};
export const setNewPassword = async (req: setNewPasswordReq) => {
  const res = await callApi.post<setNewPasswordReq, {}>(
    'set-new-password',
    req,
  );
  return res;
};
