import { Logo } from './Logo'
import { copy } from '@/data/copy'
import { Container } from './Container'

const footerLinks = {
  about: [
    { label: 'Мисия', href: '#program' },
    { label: 'Екип', href: '#mentors' },
    { label: 'Истории', href: '#students' }
  ],
  program: [
    { label: 'Програма', href: '#program' },
    { label: 'Student Journey', href: '#students' },
    { label: 'Demo Day', href: '#investors' }
  ],
  students: [
    { label: 'Кандидатствай', href: '#apply' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Scholarships', href: '#program' }
  ],
  investors: [
    { label: 'За инвеститори', href: '#investors' },
    { label: 'Партньорства', href: '#investors' },
    { label: 'Due diligence', href: '#investors' }
  ],
  legal: [
    { label: copy.legal.terms, href: '/terms' },
    { label: copy.legal.privacy, href: '/privacy' },
    { label: copy.legal.cookies, href: '/cookies' }
  ]
}

export const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-background py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div className="space-y-4">
            <Logo variant="primary" />
            <p className="max-w-sm text-sm text-neutral-700">
              Платформа за млади основатели (15–19), които искат да изградят реални продукти и да срещнат правилните инвеститори.
            </p>
            <div className="flex items-center gap-4 text-sm text-neutral-700">
              <a href="mailto:hello@nucton.net" className="hover:text-primary">
                hello@nucton.net
              </a>
              <span aria-hidden>·</span>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary">
                LinkedIn
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-primary">
                Instagram
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {Object.entries(footerLinks).map(([key, links]) => (
              <div key={key} className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-600">{key}</p>
                <ul className="space-y-2 text-sm text-neutral-800">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-black/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NUCTON. Всички права запазени.</p>
          <p>Language: Български (EN скоро)</p>
        </div>
      </Container>
    </footer>
  )
}
