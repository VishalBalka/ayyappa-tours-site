import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { HowWeWork } from '@/components/how-we-work'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Tours } from '@/components/tours'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Tours />
        <HowWeWork />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
