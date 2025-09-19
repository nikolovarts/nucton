import { type ReactNode } from 'react'
import { clsx } from 'clsx'

type CardProps = {
  as?: 'div' | 'article'
  className?: string
  children: ReactNode
}

export const Card = ({ as: Component = 'div', className, children }: CardProps) => {
  return <Component className={clsx('card h-full bg-white p-6', className)}>{children}</Component>
}
