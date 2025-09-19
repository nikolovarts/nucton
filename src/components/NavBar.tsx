import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { copy } from '@/data/copy'
import { Logo } from './Logo'
import { Button } from './Button'

const navLinks = [
  { label: copy.nav.about, href: '#program' },
  { label: copy.nav.students, href: '#students' },
  { label: copy.nav.investors, href: '#investors' },
  { label: copy.nav.mentors, href: '#mentors' },
  { label: copy.nav.faq, href: '#faq' }
]

export const NavBar = () => {
  return (
    <Disclosure as="nav" className="sticky top-0 z-40 border-b border-black/10 bg-background/90 backdrop-blur">
      {({ open }) => (
        <>
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <a href="#hero" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <Logo variant="primary" withWordmark={false} />
            </a>
            <div className="hidden items-center gap-6 md:flex">
              <ul className="flex items-center gap-6 text-sm font-medium text-neutral-800">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <Button href="#apply">Присъедини се (ученик)</Button>
                <Button href="#investors" variant="secondary">
                  За инвеститори
                </Button>
              </div>
            </div>
            <Disclosure.Button
              className="inline-flex items-center justify-center rounded-full border border-black/10 p-2 text-text transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:hidden"
              aria-label={open ? 'Затвори менюто' : 'Отвори менюто'}
            >
              {open ? <XMarkIcon className="h-6 w-6" aria-hidden /> : <Bars3Icon className="h-6 w-6" aria-hidden />}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="border-t border-black/10 bg-background px-4 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Disclosure.Button
                  key={link.href}
                  as="a"
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-base font-medium text-neutral-800 transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {link.label}
                </Disclosure.Button>
              ))}
              <Button href="#apply">Присъедини се (ученик)</Button>
              <Button href="#investors" variant="secondary">
                За инвеститори
              </Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
