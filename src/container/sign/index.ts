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
export const loginVerify = (req: loginReq) => {
  if (!(req.id && req.password))
    return { result: -1, message: '필수 입력칸이 비어있습니다.' };
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      req.id,
    )
  )
    return { result: -1, message: '이메일 형식이 아닙니다.' };
  return { result: 1, message: '' };
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
export const signupVerify = (req: { rPassword: string } & signupReq) => {
  if (!(req.id && req.password && req.name && req.rPassword))
    return { result: -1, message: '필수 입력칸이 비어있습니다.' };

  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      req.id,
    )
  )
    return { result: -1, message: '이메일 형식이 아닙니다.' };
  if (
    !/(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/.test(
      req.password,
    )
  )
    return {
      result: -1,
      message:
        '비밀번호는 숫자, 영문, 특수문자를 포함하며, 8자리 이상 이여야 합니다.',
    };
  if (req.password !== req.rPassword)
    return { result: -1, message: '비밀번호 두개가 다릅니다.' };

  return { result: 1, message: '' };
};
