import { clsx } from 'clsx'

export type LogoVariant = 'primary' | 'secondary' | 'mono' | 'inverted'

const variants: Record<LogoVariant, string> = {
  primary: '/logos/1.svg',
  secondary: '/logos/2.svg',
  mono: '/logos/3.svg',
  inverted: '/logos/4.svg'
}

export type LogoProps = {
  variant?: LogoVariant
  withWordmark?: boolean
  className?: string
}

export const Logo = ({ variant = 'primary', withWordmark = true, className }: LogoProps) => {
  return (
    <div className={clsx('flex items-center gap-3', className)} aria-label="NUCTON logo">
      <img
        src={variants[variant]}
        alt="NUCTON логотип"
        className={clsx('h-9 w-auto', !withWordmark && 'max-w-[2.75rem]')}
        loading="lazy"
        width={withWordmark ? 160 : 44}
        height={36}
      />
      {!withWordmark && (
        <span className="font-display text-xl font-semibold uppercase tracking-[0.16em] text-text">
          NUCTON
        </span>
      )}
    </div>
  )
}
