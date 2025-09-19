import { Accordion } from '@/components/Accordion'
import { Section } from '@/components/Section'
import { faqItems } from '@/data/faq'
import { copy } from '@/data/copy'

export const FAQ = () => (
  <Section
    id="faq"
    eyebrow="FAQ"
    title={copy.faq.title}
    description="Ако имаш допълнителни въпроси, пиши ни на hello@nucton.net. Отговаряме бързо и споделяме необходимите материали."
  >
    <Accordion
      items={faqItems.map((item, index) => ({
        id: `faq-${index}`,
        title: item.question,
        content: item.answer
      }))}
    />
  </Section>
)
