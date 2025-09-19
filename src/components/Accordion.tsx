import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'

type AccordionItem = {
  id: string
  title: string
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
}

export const Accordion = ({ items }: AccordionProps) => (
  <div className="space-y-4" role="region" aria-label="FAQ">
    {items.map((item) => (
      <Disclosure as="div" key={item.id} className="rounded-2xl border border-black/10 bg-white shadow-md">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left text-base font-semibold text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              <span>{item.title}</span>
              <ChevronDownIcon className={clsx('h-5 w-5 transition', open && 'rotate-180')} aria-hidden />
            </Disclosure.Button>
            <Disclosure.Panel className="px-6 pb-6 text-sm text-neutral-700">
              {item.content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ))}
  </div>
)
