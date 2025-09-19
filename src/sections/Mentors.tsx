import { Section } from '@/components/Section'
import { MentorGrid } from '@/components/MentorGrid'

export const Mentors = () => (
  <Section
    id="mentors"
    eyebrow="Ментори"
    title="Експерти от стартиращата екосистема"
    description="Практици от продукти, финанси, дизайн и фондове, които всяка седмица дават насоки и осигуряват реални интрота."
  >
    <MentorGrid />
  </Section>
)
