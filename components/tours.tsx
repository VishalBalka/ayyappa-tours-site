import Image from 'next/image'
import { Mountain, PawPrint, Sailboat, Sun } from 'lucide-react'

const tours = [
  {
    title: 'Hill stations',
    icon: Mountain,
    image: '/images/hill-stations.png',
    alt: 'Misty hill station road winding through tea estates',
  },
  {
    title: 'Wildlife',
    icon: PawPrint,
    image: '/images/wildlife.png',
    alt: 'Elephants near a lake in a green Kerala forest',
  },
  {
    title: 'Backwaters',
    icon: Sailboat,
    image: '/images/backwaters.png',
    alt: 'Traditional houseboat on palm-lined Kerala backwaters',
  },
  {
    title: 'Beach retreats',
    icon: Sun,
    image: '/images/beach.png',
    alt: 'Kerala beach with cliffs and coconut palms',
  },
]

export function Tours() {
  return (
    <section id="tours" aria-labelledby="tours-heading" className="scroll-mt-20 px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</p>
          <h2 id="tours-heading" className="mt-3 text-balance font-serif text-3xl font-semibold sm:text-4xl">
            Four ways to see Kerala
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            We run handcrafted tours across Kerala, from the cool hills to the sunlit coast.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <li
              key={tour.title}
              className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 p-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                  <tour.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl font-semibold">{tour.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
