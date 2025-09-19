import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
  type Ref
} from 'react'
import { clsx } from 'clsx'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonBaseProps = {
  variant?: ButtonVariant
  className?: string
  href?: string
  icon?: ReactNode
}

export type ButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'type'> & {
    type?: 'button' | 'submit' | 'reset'
  }

const buttonStyles = ({ variant = 'primary' }: { variant?: ButtonVariant }) =>
  clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition transform-gpu duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    {
      primary: 'bg-primary text-white hover:brightness-95',
      secondary:
        'border border-primary text-primary hover:bg-primary/10 focus-visible:bg-primary/10',
      ghost: 'text-text hover:bg-neutral-100'
    }[variant]
  )

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', className, href, icon, children, type = 'button', ...props }, ref) => {
    const styles = clsx(buttonStyles({ variant }), 'hover:-translate-y-[2px]', className)

    if (href) {
      return (
        <a
          href={href}
          className={styles}
          ref={ref as Ref<HTMLAnchorElement>}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {icon}
          <span>{children}</span>
        </a>
      )
    }

    return (
      <button
        type={type}
        className={styles}
        ref={ref as Ref<HTMLButtonElement>}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {icon}
        <span>{children}</span>
      </button>
    )
  }
)

Button.displayName = 'Button'
