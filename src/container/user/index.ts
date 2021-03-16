import callApi from '../../utils/api'
import callCookie from '../../utils/cookie'
import { loginReq, loginRes } from '../sign'

export interface BaseResponse<T> {
    data: T
}

export interface User {
    name: string
    uid: string
}

export const fetchProfile = async () => {
    const res = await callApi.get<{}, BaseResponse<User>>('users/me')
    return res
}

export const resignUser = async () => {
    const res = await callApi.delete<{}, BaseResponse<any>>('user', {})
    return res
}

export const logOut = () => {
    callCookie.delete('staySignedIn')
    callCookie.delete('jwt')
}
