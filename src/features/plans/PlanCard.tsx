import type { Plan } from '../../types'

interface PlanCardProps {
  plan: Plan
  selected: boolean
  onSelect: () => void
}

export function PlanCard({ plan, selected, onSelect }: PlanCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => { if (e.key === 'Enter') onSelect() }}
      style={{ border: selected ? '2px solid blue' : '1px solid gray' }}
    >
      <h3>{plan.nombre}</h3>
      <p>{plan.precio}</p>
      <ul>
        {plan.coberturas.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  )
}
