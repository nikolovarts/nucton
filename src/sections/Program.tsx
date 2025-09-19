import { Section } from '@/components/Section'
import { ProgramAtGlance } from '@/components/ProgramAtGlance'

export const Program = () => {
  return (
    <Section
      id="program"
      eyebrow="Програма"
      title="Програмата накратко"
      description="Създадена за ученици, които искат да валидират идея, да изградят MVP и да се срещнат с реални инвеститори. 10 седмици, в които комбинираме уъркшопи, менторство и комюнити подкрепа."
    >
      <ProgramAtGlance />
    </Section>
  )
}
