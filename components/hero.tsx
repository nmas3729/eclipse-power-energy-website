import { CheckCircle2, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"

const trustPoints = [
  "Residential",
  "Commercial",
  "Industrial",
  "Mining",
  "Estates",
  "Municipalities",
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-solar-obVfN89zeglh6JPoYWHyBXREYqGGoD.png"
          alt="Solar panels installed on a modern South African home"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      </div>



      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 pt-24 md:pt-32 lg:pt-36 pb-16 sm:px-6 sm:pb-28 lg:pb-36 space-y-10">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
          Energy Independence for
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Every Scale
          </span>{' '}
          of Operation
        </h1>

        <p className="max-w-xl text-base leading-8 text-white text-pretty sm:text-lg mb-8">
          Eclipse Power Energy designs, supplies and installs premium Hanchu solar and battery systems for homes, businesses, industrial parks, mining operations, residential estates and municipalities across South Africa.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center mb-8">
          <a
            href="#quote"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              className:
                "inline-flex items-center gap-3 rounded-xl px-6 font-semibold text-primary-foreground shadow-lg ring-1 ring-primary/20 hover:scale-105 transition-transform duration-150",
            })}
          >
            <MessageCircle className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
            Get a Quick Quote
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-3 mb-10">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm font-medium text-white">
              <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
