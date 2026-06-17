import { Award, BatteryCharging, HardHat, Leaf, LifeBuoy, Settings } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Quality Hanchu Products",
    description:
      "We use premium Hanchu equipment to deliver reliable solar power and long-lasting energy storage.",
  },
  {
    icon: HardHat,
    title: "Professional Installation",
    description:
      "Our certified team installs your system safely and efficiently for long-term performance.",
  },
  {
    icon: Leaf,
    title: "Energy Independence",
    description:
      "Reduce reliance on the grid with a system designed to keep your home powered longer.",
  },
  {
    icon: BatteryCharging,
    title: "Load Shedding Protection",
    description:
      "Hanchu battery backup provides reliable power during outages and load-shedding events.",
  },
  {
    icon: Settings,
    title: "Custom System Design",
    description:
      "Every installation is tailored to your property, energy use and future expansion plans.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description:
      "We offer consistent maintenance and support to keep your solar system operating at its best.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="best-sellers" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.18em] text-primary">Why Choose Us</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            The Smart Choice for Solar
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            We are committed to delivering exceptional solar solutions with unmatched expertise and
            premium Hanchu products.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <reason.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
