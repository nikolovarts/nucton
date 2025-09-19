export type Mentor = {
  name: string
  role: string
  company: string
  expertise: string[]
  image: string
}

export const mentors: Mentor[] = [
  {
    name: 'Мила Георгиева',
    role: 'Product Lead',
    company: 'GreenShift',
    expertise: ['Product Discovery', 'UX', 'Customer Research'],
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Иван Петров',
    role: 'CTO',
    company: 'Nova Robotics',
    expertise: ['AI', 'Hardware', 'Rapid Prototyping'],
    image:
      'https://images.unsplash.com/photo-1544723795-3fb2b849b39a?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Ели Стоянова',
    role: 'VC Associate',
    company: 'BlackSea Capital',
    expertise: ['Fundraising', 'Financial Modeling', 'Pitching'],
    image:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Алекс Бояджиев',
    role: 'Growth Strategist',
    company: 'LaunchLab',
    expertise: ['Go-to-market', 'Growth', 'Brand'],
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Деси Николова',
    role: 'Head of Design',
    company: 'Bright Studio',
    expertise: ['Design Systems', 'Brand', 'Service Design'],
    image:
      'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Калоян Попов',
    role: 'Founder',
    company: 'AgroNext',
    expertise: ['AgriTech', 'Operations', 'Impact'],
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Рая Илиева',
    role: 'Data Scientist',
    company: 'SenseAI',
    expertise: ['Data Strategy', 'Ethics', 'MLOps'],
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Петър Ганчев',
    role: 'Startup Coach',
    company: 'Basecamp Sofia',
    expertise: ['Lean Startup', 'Team Culture', 'Leadership'],
    image:
      'https://images.unsplash.com/photo-1544723795-3fb1c1f2d93d?auto=format&fit=crop&w=400&q=80'
  }
]
