export type AnalyticsEvent = {
  category: string
  action: string
  label?: string
  value?: number
}

export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window === 'undefined') return
  if ('gtag' in window && typeof window.gtag === 'function') {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value
    })
    return
  }

  if (Array.isArray((window as typeof window & { dataLayer?: unknown[] }).dataLayer)) {
    ;(window as typeof window & { dataLayer: unknown[] }).dataLayer.push({
      event: event.action,
      ...event
    })
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}
