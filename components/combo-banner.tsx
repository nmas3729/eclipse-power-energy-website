import Image from "next/image"
import { Check } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"

const points = [
  "Complete inverter, battery & panel combos",
  "Sized for 3.5kW homes up to 12kW properties",
  "Designed, supplied and installed by Eclipse",
]

export function ComboBanner() {
  return (
    <section id="components" className="bg-foreground py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          <p className="font-semibold uppercase tracking-[0.18em] text-secondary">
            Complete Solar Combos
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-background text-balance sm:text-4xl">
            Everything you need in one ready-to-install package
          </h2>
          <p className="text-lg leading-relaxed text-background/70 text-pretty">
            Eclipse supplies and installs pre-matched Hanchu combos — taking the guesswork out of going solar. Inverter, lithium battery and panels, professionally fitted by our team for maximum uptime.
          </p>
          <ul className="flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-background">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>
          <a
            href="#quote"
            className={buttonVariants({ size: "lg", className: "w-fit rounded-full font-semibold" })}
          >
            Build My Combo
          </a>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="overflow-hidden rounded-3xl bg-background p-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12kW-Combo-300-x-300-px-ZrD1J9n2EZ7xV82l7DFy4ockogwjes.png"
              alt="12kW Hanchu solar combo with inverter, lithium battery and panels"
              width={400}
              height={400}
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
