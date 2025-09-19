import { type ReactNode } from 'react'
import { clsx } from 'clsx'
import { Container } from './Container'

type SectionProps = {
  id?: string
  title?: string
  eyebrow?: string
  description?: string
  children: ReactNode
  className?: string
  headingClassName?: string
}

export const Section = ({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
  headingClassName
}: SectionProps) => {
  return (
    <section id={id} className={clsx('py-16 sm:py-24', className)}>
      <Container>
        <div className="flex flex-col gap-12">
          {(title || description || eyebrow) && (
            <header className="max-w-3xl space-y-4">
              {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
              {title && (
                <h2 className={clsx('font-display text-display-2 text-text', headingClassName)}>{title}</h2>
              )}
              {description && <p className="text-base text-neutral-700">{description}</p>}
            </header>
          )}
          {children}
        </div>
      </Container>
    </section>
  )
}
