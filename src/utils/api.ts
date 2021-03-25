import history from './browserHistory';
import callCookie from './cookie';

type fetchMethod = 'get' | 'post' | 'put' | 'delete' | 'PATCH';

interface networkMessage {
  code: number;
  success: boolean;
  msg: string;
}

const errorHandling = async function (response: Response): Promise<boolean> {
  const { status } = response;

  if (status === 401) {
    callCookie.delete('jwt');
    history.push('/login');
    return false;
  }

  return true;
};
const callFetch = function (
  url: string,
  method: fetchMethod,
  body: any,
  isFormData?: boolean,
): Promise<Response> {
  const jwt = callCookie.get('jwt');

  const init: RequestInit = isFormData
    ? {
        headers: {
          'X-AUTH-TOKEN': jwt || '',
        },
        method,
        body,
      }
    : {
        headers: {
          'Content-Type': 'application/json',
          'X-AUTH-TOKEN': jwt || '',
        },
        method,
        body: method !== 'get' ? JSON.stringify(body) : undefined,
      };
  return fetch(url, init);
};
const toJson = async function <O>(
  response: Response,
): Promise<O & networkMessage> {
  let body: O & networkMessage;
  try {
    body = await response.clone().json();
  } catch (err) {
    const responseText = await response.text();
    throw new Error(`Error converting to json : ${responseText}`);
  }

  return body;
};
const callApiBase = async function <I, O>(
  url: string,
  method: fetchMethod,
  body: I | undefined = undefined,
  isFormData?: boolean,
): Promise<(O & networkMessage) | undefined> {
  let serverUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  if (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1)
    serverUrl = '';

  const response: Response = await callFetch(
    `${serverUrl}${url}`,
    method,
    body,
    isFormData,
  );

  const ok = await errorHandling(response);
  if (ok) return toJson<O>(response);

  // console.log('Available after login');
  return undefined;
};

export default {
  get: <I, O>(url: string): Promise<(O & networkMessage) | undefined> =>
    callApiBase<I, O>(url, 'get'),
  post: <I, O>(
    url: string,
    body: I,
    isFormData?: boolean,
  ): Promise<(O & networkMessage) | undefined> =>
    callApiBase<I, O>(url, 'post', body, isFormData),
  put: <I, O>(
    url: string,
    body: I,
  ): Promise<(O & networkMessage) | undefined> =>
    callApiBase<I, O>(url, 'put', body),
  delete: <I, O>(
    url: string,
    body: I,
  ): Promise<(O & networkMessage) | undefined> =>
    callApiBase<I, O>(url, 'delete', body),

  patch: <I, O>(
    url: string,
    body: I,
  ): Promise<(O & networkMessage) | undefined> =>
    callApiBase<I, O>(url, 'PATCH', body),
};
