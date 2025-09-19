export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const srOnly = 'absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0'
