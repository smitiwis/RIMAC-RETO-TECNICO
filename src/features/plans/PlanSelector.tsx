import { usePlans } from './usePlans'
import { PlanCard } from './PlanCard'
import { usePlanStore } from '../../store/usePlanStore'

export function PlanSelector() {
  const { data: planes, isLoading } = usePlans()
  const { planId, setPlanId, setTipoCotizante } = usePlanStore()

  if (isLoading) return <div>Cargando planes...</div>

  return (
    <div>
      {planes?.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          selected={planId === plan.id}
          onSelect={() => {
            setPlanId(plan.id)
            setTipoCotizante(plan.tipo)
          }}
        />
      ))}
    </div>
  )
}
