import { investorPartners } from '@/data/investors'

export const InvestorStrip = () => (
  <div className="flex flex-wrap items-center justify-center gap-8">
    {investorPartners.map((partner) => (
      <a
        key={partner.name}
        href={partner.url}
        className="group inline-flex h-20 w-40 items-center justify-center rounded-2xl border border-black/5 bg-white/80 p-4 grayscale transition hover:grayscale-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <img
          src={partner.logo}
          alt={`${partner.name} logo`}
          loading="lazy"
          width={160}
          height={80}
          className="h-full w-full object-contain opacity-70 transition group-hover:opacity-100"
        />
      </a>
    ))}
  </div>
)
