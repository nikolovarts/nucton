type MetricProps = {
  label: string
  value: string
  description?: string
}

export const Metric = ({ label, value, description }: MetricProps) => {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-md">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">{label}</p>
      <p className="mt-3 font-display text-3xl font-semibold text-text">{value}</p>
      {description && <p className="mt-2 text-sm text-neutral-600">{description}</p>}
    </div>
  )
}
