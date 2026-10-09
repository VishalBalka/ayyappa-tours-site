import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { EMAIL, EMAIL_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

const channels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: EMAIL_URL,
    external: false,
  },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Plan your trip</p>
        <h2 id="contact-heading" className="mt-3 text-balance font-serif text-3xl font-semibold sm:text-4xl">
          Ready to explore Kerala with us?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Message us on WhatsApp or send us an email to get started.
        </p>

        <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm transition-all hover:border-primary hover:shadow-md focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <channel.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-muted-foreground">{channel.label}</span>
                  <span className="block truncate text-lg font-semibold">{channel.value}</span>
                </span>
                <ArrowUpRight
                  className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
