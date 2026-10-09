import { MessageCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/contact'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#tours', label: 'Tours' },
  { href: '#how-we-work', label: 'How we work' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground"
          >
            A
          </span>
          <span className="font-serif text-lg font-semibold leading-tight">
            Ayyappa Tours <span className="text-primary">&amp;</span> Travels
          </span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants(), 'h-10 rounded-full px-4')}
        >
          <MessageCircle aria-hidden="true" />
          <span>WhatsApp us</span>
        </a>
      </div>
    </header>
  )
}
