import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import { LeadForm } from '@/components/LeadForm'
import { copy } from '@/data/copy'

export const CTA = () => (
  <Section
    id="apply"
    eyebrow="Следваща стъпка"
    title={copy.cta.title}
    description="Започни разговора с нашия екип. Ще те преведем през процеса на кандидатстване или ще обсъдим партньорство."
  >
    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-6">
        <p className="text-base text-neutral-700">
          Независимо дали си ученик с идея или инвеститор, който иска да подкрепи следващото поколение лидери, NUCTON изгражда рамка за реално действие.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#apply">{copy.cta.student}</Button>
          <Button href="#investors" variant="secondary">
            {copy.cta.investor}
          </Button>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Avg. response time · &lt;24h</p>
      </div>
      <LeadForm />
    </div>
  </Section>
)
