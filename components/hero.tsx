import { CheckCircle2, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"

const trustPoints = ["Trusted Hanchu Products & Installation Services", "Nationwide Delivery", "Expert Installation"]

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Badge */}
      <div className="relative mx-auto max-w-6xl px-4 pt-28 sm:px-6 sm:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
          {"South Africa's Solar & Hanchu Installation Specialists"}
        </span>
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-20 pt-6 sm:px-6">
        <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
          Power your home.
          <br />
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Beat load-shedding.
          </span>
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-white/85 text-pretty sm:text-lg">
          Shop top-tier solar panels, hybrid inverters, and lithium batteries at competitive prices.
          Professional installation services available nationwide.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#quote"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              className: "rounded-xl border-white/30 bg-white/5 px-6 font-semibold text-white backdrop-blur hover:bg-white/15 hover:text-white",
            })}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Get a Quick Quote
          </a>
        </div>

        <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-medium text-white">
              <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
