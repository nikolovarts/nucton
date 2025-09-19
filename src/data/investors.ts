export type InvestorPartner = {
  name: string
  focus: string
  logo: string
  url: string
}

export const investorPartners: InvestorPartner[] = [
  {
    name: 'Aurora Seed Collective',
    focus: 'Climate & impact tech',
    logo: '/investors/aurora.svg',
    url: 'https://www.nucton.net/investors/aurora'
  },
  {
    name: 'Delta Angel Network',
    focus: 'Early SaaS & fintech',
    logo: '/investors/delta.svg',
    url: 'https://www.nucton.net/investors/delta'
  },
  {
    name: 'LaunchForge Ventures',
    focus: 'Mobility & deep tech',
    logo: '/investors/launchforge.svg',
    url: 'https://www.nucton.net/investors/launchforge'
  },
  {
    name: 'Kindred Capital Studio',
    focus: 'Consumer & community',
    logo: '/investors/kindred.svg',
    url: 'https://www.nucton.net/investors/kindred'
  },
  {
    name: 'Northstar Angels',
    focus: 'STEM education & hardware',
    logo: '/investors/northstar.svg',
    url: 'https://www.nucton.net/investors/northstar'
  }
]
