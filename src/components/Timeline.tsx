type TimelineStep = {
  title: string
  description: string
  kpi?: string
}

type TimelineProps = {
  steps: TimelineStep[]
}

export const Timeline = ({ steps }: TimelineProps) => {
  return (
    <ol className="relative border-l border-primary/40 pl-6">
      {steps.map((step, index) => (
        <li key={step.title} className="mb-10 last:mb-0">
          <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-xs font-semibold text-primary">
            {index + 1}
          </div>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-md">
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-lg font-semibold text-text">{step.title}</h3>
              <p className="text-sm text-neutral-700">{step.description}</p>
              {step.kpi && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">{step.kpi}</p>}
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
