import { copy } from '@/data/copy'
import { Metric } from './Metric'

const acceptanceCriteria = [
  'Екипи от ученици между 15–19 г. (индивидуални кандидати също са ок).',
  'Минимално време за участие: 6 часа седмично (уъркшопи + практика).',
  'Готовност за споделяне на напредък и работа с ментори на английски/български.',
  'Отвореност към feedback и валидиране с реални потребители.'
]

export const ProgramAtGlance = () => {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="grid gap-5 sm:grid-cols-2">
        {copy.program.items.map((item) => (
          <Metric key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
      <aside className="rounded-2xl border border-black/10 bg-primary/5 p-8 shadow-md">
        <h3 className="font-display text-lg font-semibold text-text">Критерии за прием</h3>
        <ul className="mt-4 space-y-3 text-sm text-neutral-700">
          {acceptanceCriteria.map((criterion) => (
            <li key={criterion} className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" aria-hidden />
              <span>{criterion}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
