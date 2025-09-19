import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { copy } from '@/data/copy'

export const Hero = () => {
  const ref = useRef<HTMLElement | null>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -40])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative overflow-hidden bg-background pb-20 pt-28 sm:pt-32"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <motion.div
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              NUCTON · Young Founders
            </span>
            <h1 className="font-display text-display-1 text-text">{copy.hero.h1}</h1>
            <p className="max-w-xl text-lg text-neutral-700">{copy.hero.sub}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#apply">{copy.hero.ctaStudent}</Button>
              <Button href="#investors" variant="secondary">
                {copy.hero.ctaInvestor}
              </Button>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Ментори</dt>
                <dd className="font-display text-2xl font-semibold">25+ експерти</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Demo Day</dt>
                <dd className="font-display text-2xl font-semibold">инвеститорски панели</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">Стипендии</dt>
                <dd className="font-display text-2xl font-semibold">за топ екипи</dd>
              </div>
            </dl>
          </motion.div>
          <div className="relative">
            <motion.div
              style={{ y }}
              className="relative mx-auto h-[420px] w-[420px] max-w-full rounded-[3rem] bg-gradient-to-br from-primary/20 via-primary/10 to-primary/30 shadow-soft"
            >
              <div className="absolute inset-8 rounded-[2.5rem] border border-primary/20 bg-white/80 backdrop-blur-xl">
                <div className="flex h-full flex-col justify-between p-8">
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Studio Sprint</p>
                    <p className="text-lg font-medium text-text">
                      От идея до MVP за 10 седмици с подкрепа от предприемачи, инженери и инвеститори.
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-2xl bg-primary/10 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Weekly focus</p>
                      <p className="mt-2 text-sm text-text">Discovery → Build → Launch → Pitch</p>
                    </div>
                    <div className="rounded-2xl border border-dashed border-primary/40 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Access</p>
                      <p className="mt-2 text-sm text-neutral-700">Office hours · Labs · Demo Day</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
