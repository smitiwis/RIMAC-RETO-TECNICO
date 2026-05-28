import { useSummary } from './useSummary'

export function SummaryCard() {
  const { dni, celular, user, planId, tipoCotizante } = useSummary()

  return (
    <div>
      <h2>Resumen</h2>
      <p>Nombre: {user ? `${user.name} ${user.lastName}` : ""}</p>
      <p>DNI: {dni}</p>
      <p>Celular: {celular}</p>
      <p>Plan: {planId}</p>
      <p>Tipo: {tipoCotizante}</p>
    </div>
  )
}
