import { Section } from '@/components/Section'
import { Timeline } from '@/components/Timeline'
import { copy } from '@/data/copy'

const kpis = [
  '3 дизайн спринта · 2 office hours',
  '4 build уъркшопа · weekly standups',
  'Pitch клиника · финансови основи',
  'Demo Day · индивидуални интрота'
]

export const StudentJourney = () => {
  const steps = copy.journey.steps.map((step, index) => ({
    title: step.title,
    description: step.text,
    kpi: kpis[index]
  }))

  return (
    <Section
      id="students"
      eyebrow="Ученици"
      title={copy.journey.title}
      description="Всяка седмица комбинира теория и практика. Екипите получават менторски feedback, достъп до лаборатории и подкрепа за първите клиенти."
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Timeline steps={steps} />
        <div className="rounded-2xl border border-black/10 bg-white p-8 shadow-md">
          <h3 className="font-display text-lg font-semibold text-text">Какво получаваш</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-700">
            <li>• Персонални ментори от стартиращи компании и фондове.</li>
            <li>• Практически задания и шаблони за валидиране.</li>
            <li>• Подкрепа за участие в състезания и акселератори.</li>
            <li>• Комюнити от амбициозни ученици и alumni.</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
