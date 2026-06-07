"use client"

import Link from "next/link"
import { ArrowRight, Home, Building, Layers, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const sizes = [
  {
    title: "Small Home 3–5kW",
    description: "Perfect for compact homes looking for daytime savings and backup support.",
    icon: Home,
    href: "#kits",
  },
  {
    title: "Medium Home 5–8kW",
    description: "Designed for family homes that need reliable power during load-shedding.",
    icon: Building,
    href: "#kits",
  },
  {
    title: "Large Home 8–12kW",
    description: "High-output systems for larger properties and heavier evening loads.",
    icon: Layers,
    href: "#kits",
  },
  {
    title: "Business Systems",
    description: "Scalable commercial solar kits for small businesses and offices.",
    icon: Sparkles,
    href: "#kits",
  },
]

export function SystemSizeSelector() {
  return (
    <section id="size-selector" className="scroll-mt-20 py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Choose Your System"
          title="Find the right solar kit for your home or business"
          description="Start with the system size that suits your daily usage, then compare pre-built kits for the fastest path to solar savings."
          align="left"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {sizes.map((size, index) => {
            const Icon = size.icon
            return (
              <Link
                key={size.title}
                href={size.href}
                className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="inline-flex items-center justify-center rounded-2xl bg-brand-green/10 p-3 text-brand-green-dark">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{size.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{size.description}</p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-green-dark">
                  <span>Explore kits</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
