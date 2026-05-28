import { api } from './axiosInstance'
import type { Quote } from '../types'

export interface RawPlan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface PlansResponse {
  list: RawPlan[];
}

export const quoteService = {
  postCotizar: (data: Pick<Quote, 'dni' | 'celular'>) =>
    api.post<unknown>('/cotizar', data),

  getPlanes: () =>
    api.get<PlansResponse>('/plans.json'),
}
