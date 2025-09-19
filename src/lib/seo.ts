export const defaultSEO = {
  title: 'NUCTON — Програма за ученици-основатели (15–19) с ментори и инвеститори',
  description:
    'NUCTON помага на млади основатели да валидират идеи, да изградят MVP и да се срещнат с ангели и VC инвеститори. Кандидатствай днес.',
  url: 'https://www.nucton.net/',
  image: '/og-image-1200x630.png'
}

export const applySEO = (meta: Partial<typeof defaultSEO>) => {
  if (typeof document === 'undefined') return

  const finalMeta = { ...defaultSEO, ...meta }
  document.title = finalMeta.title

  const ensureTag = (name: string, attribute: 'name' | 'property' = 'name') => {
    let tag = document.querySelector(`meta[${attribute}="${name}"]`)
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute(attribute, name)
      document.head.appendChild(tag)
    }
    return tag
  }

  ensureTag('description').setAttribute('content', finalMeta.description)
  ensureTag('og:title', 'property').setAttribute('content', finalMeta.title)
  ensureTag('og:description', 'property').setAttribute('content', finalMeta.description)
  ensureTag('og:url', 'property').setAttribute('content', finalMeta.url)
  ensureTag('og:image', 'property').setAttribute('content', finalMeta.image)
  ensureTag('twitter:card', 'name').setAttribute('content', 'summary_large_image')
  ensureTag('twitter:title', 'name').setAttribute('content', finalMeta.title)
  ensureTag('twitter:description', 'name').setAttribute('content', finalMeta.description)
  ensureTag('twitter:image', 'name').setAttribute('content', finalMeta.image)

  let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null
  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }
  link.href = finalMeta.url
}
