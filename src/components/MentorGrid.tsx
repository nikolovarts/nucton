import { mentors } from '@/data/mentors'

export const MentorGrid = () => (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {mentors.map((mentor) => (
      <article
        key={mentor.name}
        className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
      >
        <img
          src={`${mentor.image}&sat=-15`}
          alt={mentor.name}
          loading="lazy"
          width={400}
          height={320}
          className="h-48 w-full object-cover"
        />
        <div className="space-y-3 p-5">
          <div>
            <h3 className="font-display text-lg font-semibold text-text">{mentor.name}</h3>
            <p className="text-sm text-neutral-600">
              {mentor.role} · {mentor.company}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
)
