import { z } from 'zod'

export const quoteSchema = z.object({
  dni: z
    .string()
    .length(8, 'El DNI debe tener 8 dígitos')
    .regex(/^\d+$/, 'Solo números'),
  celular: z
    .string()
    .length(9, 'El celular debe tener 9 dígitos')
    .regex(/^\d+$/, 'Solo números'),
})

export type QuoteFormData = z.infer<typeof quoteSchema>
