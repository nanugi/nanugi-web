import callApi from '../../utils/api'

export type getProfileRes = {
    data: User
}

export interface User {
    name: string
    uid: string
}

export const fetchProfile = async () => {
    const res = await callApi.get<{}, getProfileRes>('users/me')
    return res
}