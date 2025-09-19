import { useEffect } from 'react'
import { NavBar } from '@/components/NavBar'
import { Hero } from '@/sections/Hero'
import { ValueProps } from '@/sections/ValueProps'
import { Program } from '@/sections/Program'
import { StudentJourney } from '@/sections/StudentJourney'
import { Mentors } from '@/sections/Mentors'
import { Investors } from '@/sections/Investors'
import { FAQ } from '@/sections/FAQ'
import { CTA } from '@/sections/CTA'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'
import { applySEO } from '@/lib/seo'

const App = () => {
  useEffect(() => {
    applySEO({})
  }, [])

  return (
    <div className="min-h-screen bg-background text-text">
      <NavBar />
      <main>
        <Hero />
        <ValueProps />
        <Program />
        <StudentJourney />
        <Mentors />
        <Investors />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App
