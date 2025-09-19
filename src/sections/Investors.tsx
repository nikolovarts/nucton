import { Section } from '@/components/Section'
import { InvestorStrip } from '@/components/InvestorStrip'
import { copy } from '@/data/copy'

export const Investors = () => (
  <Section
    id="investors"
    eyebrow="Инвеститори"
    title={copy.investors.title}
    description="NUCTON е доверен партньор за ранно валидиране. Споделяме качествени dealflow възможности и осигуряваме прозрачност по време на целия процес."
  >
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-4 text-sm text-neutral-700">
        <p className="text-base text-text">{copy.investors.thesis}</p>
        <p>{copy.investors.ticket}</p>
        <p>{copy.investors.process}</p>
        <ul className="mt-4 space-y-2">
          <li>• Отворени данни за напредъка на екипите.</li>
          <li>• Споделени due diligence бележки.</li>
          <li>• Достъп до комюнити от ментори и alumni.</li>
        </ul>
        <a
          href="mailto:invest@nucton.net"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Свържи се за due diligence пакет →
        </a>
      </div>
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-md">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Партньори</p>
        <div className="mt-4">
          <InvestorStrip />
        </div>
      </div>
    </div>
  </Section>
)
