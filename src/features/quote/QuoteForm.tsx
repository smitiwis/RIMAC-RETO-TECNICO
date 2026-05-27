import { useQuoteForm } from './useQuoteForm'

export function QuoteForm() {
  const { register, handleSubmit, formState: { errors } } = useQuoteForm()

  const onSubmit = (data: { dni: string; celular: string }) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('dni')} placeholder="DNI" />
      {errors.dni && <span>{errors.dni.message}</span>}

      <input {...register('celular')} placeholder="Celular" />
      {errors.celular && <span>{errors.celular.message}</span>}

      <button type="submit">Cotizar</button>
    </form>
  )
}
