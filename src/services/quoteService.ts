import { api } from './axiosInstance'
import type { ApiResponse, Plan, Quote } from '../types'

export const quoteService = {
  postCotizar: (data: Pick<Quote, 'dni' | 'celular'>) =>
    api.post<ApiResponse<unknown>>('/cotizar', data),

  getPlanes: () =>
    api.get<ApiResponse<Plan[]>>('/planes'),
}
