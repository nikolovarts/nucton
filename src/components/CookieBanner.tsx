import { useEffect, useState } from 'react'
import { Button } from './Button'
import { Modal } from './Modal'

const STORAGE_KEY = 'nucton-cookie-consent'

type Consent = 'accepted' | 'pending'

export const CookieBanner = () => {
  const [consent, setConsent] = useState<Consent>('pending')
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent | null
    if (stored) {
      setConsent(stored)
    }
  }, [])

  const accept = () => {
    setConsent('accepted')
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'accepted')
    }
  }

  if (consent === 'accepted') return null

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 mx-auto w-full max-w-3xl rounded-2xl border border-black/10 bg-background p-5 shadow-lg">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1 text-sm text-neutral-700">
          <p className="font-semibold text-text">Използваме само необходими бисквитки</p>
          <p>
            Тези бисквитки гарантират правилна работа на сайта и аналитика в агрегирана форма. Няма реклами или споделяне с трети страни.
          </p>
        </div>
        <div className="flex flex-shrink-0 items-center gap-2">
          <Button variant="ghost" onClick={() => setShowSettings(true)}>
            Настройки
          </Button>
          <Button onClick={accept}>Приемам</Button>
        </div>
      </div>
      <Modal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        title="Настройки за бисквитки"
        description="NUCTON използва само технологично необходими бисквитки."
      >
        <p>
          Няма маркетингови или персонализиращи бисквитки. Можеш да изтриеш локалните данни по всяко време от настройките на браузъра.
        </p>
        <p className="text-sm text-neutral-500">Последна актуализация: {new Date().toLocaleDateString('bg-BG')}</p>
      </Modal>
    </div>
  )
}
