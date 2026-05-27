import { useSummary } from './useSummary'

export function SummaryCard() {
  const { user, planId, tipoCotizante } = useSummary()

  return (
    <div>
      <h2>Resumen</h2>
      <p>Nombre: {user.nombre}</p>
      <p>DNI: {user.dni}</p>
      <p>Celular: {user.celular}</p>
      <p>Plan: {planId}</p>
      <p>Tipo: {tipoCotizante}</p>
    </div>
  )
}
