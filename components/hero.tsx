import Image from 'next/image'
import { MapPin, MessageCircle, Mail } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { EMAIL_URL, WHATSAPP_URL } from '@/lib/contact'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section id="top" className="px-4 pt-6 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <Image
          src="/images/hero-kerala.png"
          alt="Misty green tea plantation hills in Kerala"
          fill
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

        <div className="relative flex min-h-[560px] flex-col justify-end gap-6 p-6 text-white sm:p-10 md:min-h-[620px] md:p-14">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur">
            <MapPin className="size-4" aria-hidden="true" />
            Based in Aluva, Kerala, India
          </p>
          <h1 className="max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Handcrafted tours across Kerala
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/90">
            Hill stations, wildlife, backwaters and beach retreats. Every itinerary is curated, with
            24/7 support from first inquiry to safe return.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants(), 'h-12 rounded-full px-6 text-base')}
            >
              <MessageCircle aria-hidden="true" />
              Message us on WhatsApp
            </a>
            <a
              href={EMAIL_URL}
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'h-12 rounded-full border-white/40 bg-white/10 px-6 text-base text-white backdrop-blur hover:bg-white hover:text-foreground',
              )}
            >
              <Mail aria-hidden="true" />
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
