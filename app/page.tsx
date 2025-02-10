import { HeroSection } from '@/components/hero-section'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { Testimonials } from '@/components/testimonials'
import { CTA } from '@/components/cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
    </main>
  )
}
