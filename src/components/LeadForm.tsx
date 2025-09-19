import { Tab } from '@headlessui/react'
import { clsx } from 'clsx'
import { useState, type FormEvent } from 'react'
import { Button } from './Button'
import { submitLeadForm, type LeadType } from '@/lib/forms'
import { trackEvent } from '@/lib/analytics'

const tabs: { id: LeadType; label: string }[] = [
  { id: 'student', label: 'Кандидатствам (ученик)' },
  { id: 'investor', label: 'Инвеститор партньор' }
]

type StudentForm = {
  name: string
  email: string
  school: string
  idea: string
  consent: boolean
}

type InvestorForm = {
  name: string
  email: string
  fund: string
  ticket: string
  message: string
}

const defaultStudent: StudentForm = {
  name: '',
  email: '',
  school: '',
  idea: '',
  consent: false
}

const defaultInvestor: InvestorForm = {
  name: '',
  email: '',
  fund: '',
  ticket: '',
  message: ''
}

const ticketRanges = ['€1k–€5k', '€5k–€10k', '€10k–€25k', 'Гъвкаво']

export const LeadForm = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [student, setStudent] = useState<StudentForm>(defaultStudent)
  const [investor, setInvestor] = useState<InvestorForm>(defaultInvestor)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const activeType = tabs[selectedIndex].id

  const handleStudentChange = (field: keyof StudentForm, value: StudentForm[keyof StudentForm]) => {
    setStudent((prev) => ({ ...prev, [field]: value }))
  }

  const handleInvestorChange = (
    field: keyof InvestorForm,
    value: InvestorForm[keyof InvestorForm]
  ) => {
    setInvestor((prev) => ({ ...prev, [field]: value }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    const emailRegex = /[^\s]+@[^\s]+\.[^\s]+/

    if (activeType === 'student') {
      if (!student.name.trim()) newErrors.studentName = 'Въведи име.'
      if (!emailRegex.test(student.email)) newErrors.studentEmail = 'Невалиден имейл.'
      if (!student.school.trim()) newErrors.school = 'Училище/град?'
      if (!student.idea.trim()) newErrors.idea = 'Разкажи ни за идеята.'
      if (!student.consent) newErrors.consent = 'Необходимо е съгласие.'
    } else {
      if (!investor.name.trim()) newErrors.investorName = 'Въведи име.'
      if (!emailRegex.test(investor.email)) newErrors.investorEmail = 'Невалиден имейл.'
      if (!investor.fund.trim()) newErrors.fund = 'Фонд/роля?'
      if (!investor.ticket.trim()) newErrors.ticket = 'Избери тикет.'
      if (!investor.message.trim()) newErrors.message = 'Как можем да бъдем полезни?'
    }

    setErrors(newErrors)
    return newErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('idle')
    setMessage('')
    const validation = validate()
    if (Object.keys(validation).length > 0) return

    setStatus('submitting')
    try {
      if (activeType === 'student') {
        await submitLeadForm({
          type: 'student',
          name: student.name,
          email: student.email,
          meta: {
            school: student.school,
            idea: student.idea,
            consent: student.consent ? 'true' : 'false'
          }
        })
        setStudent(defaultStudent)
      } else {
        await submitLeadForm({
          type: 'investor',
          name: investor.name,
          email: investor.email,
          meta: {
            fund: investor.fund,
            ticket: investor.ticket,
            message: investor.message
          }
        })
        setInvestor(defaultInvestor)
      }

      trackEvent({ category: 'lead', action: `submit_${activeType}` })
      setStatus('success')
      setMessage('Успешно изпрати запитването! Ще се свържем скоро.')
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Нещо се обърка. Опитайте отново.')
    }
  }

  const renderError = (key: string) =>
    errors[key] ? (
      <p className="mt-1 text-sm text-red-600" role="status">
        {errors[key]}
      </p>
    ) : null

  return (
    <div className="rounded-3xl border border-black/10 bg-white/95 p-6 shadow-lg backdrop-blur">
      <h3 className="font-display text-xl font-semibold text-text">Свържи се с екипа</h3>
      <p className="mt-2 text-sm text-neutral-600">
        Изпрати кандидатура или заяви партньорство. Отговаряме в рамките на 2 работни дни.
      </p>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="mt-6 grid grid-cols-2 gap-2 rounded-full bg-neutral-100 p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              className={({ selected }) =>
                clsx(
                  'rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                  selected ? 'bg-white text-text shadow-md' : 'text-neutral-600 hover:text-text'
                )
              }
            >
              {tab.label}
            </Tab>
          ))}
        </Tab.List>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <Tab.Panels>
            <Tab.Panel className="space-y-4" aria-label="Форма за ученици">
              <div>
                <label htmlFor="student-name" className="text-sm font-medium text-neutral-700">
                  Име и фамилия
                </label>
                <input
                  id="student-name"
                  name="student-name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={student.name}
                  onChange={(event) => handleStudentChange('name', event.target.value)}
                  aria-invalid={errors.studentName ? 'true' : 'false'}
                  required
                />
                {renderError('studentName')}
              </div>
              <div>
                <label htmlFor="student-email" className="text-sm font-medium text-neutral-700">
                  Имейл
                </label>
                <input
                  id="student-email"
                  name="student-email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={student.email}
                  onChange={(event) => handleStudentChange('email', event.target.value)}
                  aria-invalid={errors.studentEmail ? 'true' : 'false'}
                  required
                />
                {renderError('studentEmail')}
              </div>
              <div>
                <label htmlFor="school" className="text-sm font-medium text-neutral-700">
                  Училище / град
                </label>
                <input
                  id="school"
                  name="school"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={student.school}
                  onChange={(event) => handleStudentChange('school', event.target.value)}
                  aria-invalid={errors.school ? 'true' : 'false'}
                  required
                />
                {renderError('school')}
              </div>
              <div>
                <label htmlFor="idea" className="text-sm font-medium text-neutral-700">
                  Идея / проблем, който решаваш
                </label>
                <textarea
                  id="idea"
                  name="idea"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={student.idea}
                  onChange={(event) => handleStudentChange('idea', event.target.value)}
                  aria-invalid={errors.idea ? 'true' : 'false'}
                  required
                />
                {renderError('idea')}
              </div>
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border border-black/20 text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  checked={student.consent}
                  onChange={(event) => handleStudentChange('consent', event.target.checked)}
                  aria-invalid={errors.consent ? 'true' : 'false'}
                  required
                />
                <label htmlFor="consent" className="text-xs text-neutral-600">
                  Съгласен/на съм NUCTON да обработва личните ми данни за целите на кандидатстването. Прочети
                  <a href="/privacy" className="ml-1 underline">
                    политиката за поверителност
                  </a>
                  .
                </label>
              </div>
              {renderError('consent')}
            </Tab.Panel>
            <Tab.Panel className="space-y-4" aria-label="Форма за инвеститори">
              <div>
                <label htmlFor="investor-name" className="text-sm font-medium text-neutral-700">
                  Име и фамилия
                </label>
                <input
                  id="investor-name"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={investor.name}
                  onChange={(event) => handleInvestorChange('name', event.target.value)}
                  aria-invalid={errors.investorName ? 'true' : 'false'}
                  required
                />
                {renderError('investorName')}
              </div>
              <div>
                <label htmlFor="investor-email" className="text-sm font-medium text-neutral-700">
                  Имейл
                </label>
                <input
                  id="investor-email"
                  type="email"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={investor.email}
                  onChange={(event) => handleInvestorChange('email', event.target.value)}
                  aria-invalid={errors.investorEmail ? 'true' : 'false'}
                  required
                />
                {renderError('investorEmail')}
              </div>
              <div>
                <label htmlFor="fund" className="text-sm font-medium text-neutral-700">
                  Фонд / роля
                </label>
                <input
                  id="fund"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={investor.fund}
                  onChange={(event) => handleInvestorChange('fund', event.target.value)}
                  aria-invalid={errors.fund ? 'true' : 'false'}
                  required
                />
                {renderError('fund')}
              </div>
              <div>
                <label htmlFor="ticket" className="text-sm font-medium text-neutral-700">
                  Тикет диапазон
                </label>
                <select
                  id="ticket"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={investor.ticket}
                  onChange={(event) => handleInvestorChange('ticket', event.target.value)}
                  aria-invalid={errors.ticket ? 'true' : 'false'}
                  required
                >
                  <option value="" disabled>
                    Избери диапазон
                  </option>
                  {ticketRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {renderError('ticket')}
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-neutral-700">
                  Как искаш да се включиш?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  value={investor.message}
                  onChange={(event) => handleInvestorChange('message', event.target.value)}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  required
                />
                {renderError('message')}
              </div>
              <p className="text-xs text-neutral-500">
                Сподели къде можем да изпратим due diligence пакет или покана за Demo Day.
              </p>
            </Tab.Panel>
          </Tab.Panels>
          <div className="flex flex-col gap-3 pt-2">
            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Изпращане…' : 'Изпрати'}
            </Button>
            <p className="text-xs text-neutral-500">
              Данните се използват само за контакт и не се споделят с трети страни без съгласие.
            </p>
          </div>
          <div aria-live="polite" className="text-sm font-medium">
            {message && (
              <p className={clsx(status === 'error' ? 'text-red-600' : 'text-primary')}>{message}</p>
            )}
          </div>
        </form>
      </Tab.Group>
    </div>
  )
}
