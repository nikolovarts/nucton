import { AcademicCapIcon, SparklesIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { motion, useReducedMotion } from 'framer-motion'
import { copy } from '@/data/copy'
import { Card } from '@/components/Card'

const icons = [AcademicCapIcon, SparklesIcon, CurrencyDollarIcon]

export const ValueProps = () => {
  const prefersReduced = useReducedMotion()

  return (
    <section className="bg-background py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {copy.valueProps.map((item, index) => {
          const Icon = icons[index] ?? AcademicCapIcon
          return (
            <motion.a
              key={item.title}
              href="#program"
              className="group"
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-semibold text-text">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.text}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Научи повече
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12l-7.5 7.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
                  </svg>
                </span>
              </Card>
            </motion.a>
          )
        })}
      </div>
    </section>
  )
}
