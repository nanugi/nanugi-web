// import history from './browserHistory';
import callCookie from './cookie';

type fetchMethod = 'get' | 'post' | 'put' | 'delete' | 'PATCH';

interface networkMessage {
  code: number;
  success: boolean;
  msg: string;
}

// const errorHandling = async function (response: Response): Promise<boolean> {
//   const { clone, ok, status } = response;

//   if (!ok) {
//     if (status === 401) {
//       callCookie.delete('jwt');
//       history.push('/login');
//       return ok;
//     }

//     const responseText = await clone().text();
//     throw new Error(`Internal error : ${responseText}`);
//   }

//   return ok;
// };
const callFetch = function <I>(
  url: string,
  method: fetchMethod,
  body: I | undefined = undefined,
): Promise<Response> {
  const jwt = callCookie.get('jwt');

  const init: RequestInit = {
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
): Promise<(O & networkMessage) | undefined> {
  let serverUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  if (url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1)
    serverUrl = '';

  const response: Response = await callFetch<I>(
    `${serverUrl}${url}`,
    method,
    body,
  );

  // const ok = await errorHandling(response);

  return toJson<O>(response);

  // console.log('Available after login');
  // return undefined;
};

export default {
  get: <I, O>(url: string): Promise<(O & networkMessage) | undefined> =>
    callApiBase<I, O>(url, 'get'),
  post: <I, O>(
    url: string,
    body: I,
  ): Promise<(O & networkMessage) | undefined> =>
    callApiBase<I, O>(url, 'post', body),
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
