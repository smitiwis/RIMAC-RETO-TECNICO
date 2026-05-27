import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { quoteSchema, type QuoteFormData } from './quoteSchema'

export function useQuoteForm() {
  return useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { dni: '', celular: '' },
  })
}
