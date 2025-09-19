import { copy } from './copy'

export type FaqItem = {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  ...copy.faq.items.map((item) => ({ question: item.q, answer: item.a })),
  {
    question: 'Какви са сроковете за кандидатстване?',
    answer:
      'Приемаме кандидатури целогодишно, като групите се формират два пъти годишно. Ранните кандидатури имат предимство за стипендии.'
  },
  {
    question: 'Колко време отнема програмата всяка седмица?',
    answer:
      'Очакваме 6–8 часа седмично: уъркшопи, менторски сесии и самостоятелна работа по проекта.'
  }
]
