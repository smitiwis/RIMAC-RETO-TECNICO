import { useQuery } from '@tanstack/react-query'
import { quoteService } from '../../services/quoteService'

export function usePlans() {
  return useQuery({
    queryKey: ['planes'],
    queryFn: async () => {
      const { data } = await quoteService.getPlanes()
      return data.data
    },
  })
}
