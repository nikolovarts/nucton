const DEFAULT_ENDPOINT = 'https://submit-form.com/nucton-demo'

export type LeadType = 'student' | 'investor'

export type LeadPayload = {
  type: LeadType
  name: string
  email: string
  meta: Record<string, string>
}

export const submitLeadForm = async (payload: LeadPayload) => {
  const endpoint = import.meta.env.VITE_FORMS_ENDPOINT ?? DEFAULT_ENDPOINT
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error('Неуспешно изпращане. Опитайте отново по-късно.')
  }

  return response.json().catch(() => ({}))
}
