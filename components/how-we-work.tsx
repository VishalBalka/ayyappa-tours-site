import { Headset, MapPin, Route } from 'lucide-react'

const promises = [
  {
    icon: Route,
    title: 'Every itinerary is curated',
    body: 'Each trip is handcrafted rather than pulled off a shelf.',
  },
  {
    icon: Headset,
    title: '24/7 support',
    body: 'We are with you from your first inquiry all the way to your safe return.',
  },
  {
    icon: MapPin,
    title: 'Based in Aluva',
    body: 'Our home base is Aluva, Kerala, India.',
  },
]

export function HowWeWork() {
  return (
    <section
      id="how-we-work"
      aria-labelledby="how-heading"
      className="scroll-mt-20 bg-primary px-4 py-20 text-primary-foreground sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
            How we work
          </p>
          <h2 id="how-heading" className="mt-3 text-balance font-serif text-3xl font-semibold sm:text-4xl">
            Looked after, from first hello to home again
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {promises.map((item) => (
            <li key={item.title} className="rounded-2xl bg-primary-foreground/10 p-6 ring-1 ring-primary-foreground/15">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary-foreground text-primary">
                <item.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-primary-foreground/80">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
