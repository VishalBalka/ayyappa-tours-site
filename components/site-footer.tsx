import { EMAIL, EMAIL_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from '@/lib/contact'

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-base font-semibold text-foreground">Ayyappa Tours &amp; Travels</p>
          <p className="mt-1">Aluva, Kerala, India</p>
        </div>
        <div className="flex flex-col gap-1 md:items-end">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
          <a href={EMAIL_URL} className="hover:text-primary">
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  )
}
