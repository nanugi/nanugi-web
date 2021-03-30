import callApi from '../../utils/api'
import { BaseResponse } from '../user'

export const sendCs = async (content: string, email: string, phone: string) => {
  const res = await callApi.post<{}, BaseResponse<undefined>>('cs/new', { content, email, phone_number: phone })
  return res
}
