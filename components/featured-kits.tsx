"use client"

import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function FeaturedKits() {
  const kits = products.filter((p) => p.category === "Solar Kits")

  return (
    <section id="kits" className="scroll-mt-20 py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-green/5 -skew-y-2 transform origin-top-left -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-1 text-sm font-semibold text-brand-green-dark mb-4">
              <Zap className="size-4" />
              Complete Systems
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Solar Kits Built to Sell
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Choose pre-configured kits designed for homes and businesses, with matched panels, inverter, battery, and installation-ready setup.
            </p>
          </div>
          <Button asChild variant="default" size="lg" className="shrink-0 group bg-brand-green-dark text-white hover:bg-brand-green-dark/90 shadow-md">
            <Link href="#quote">
              Request a Quote
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {kits.map((kit, i) => (
            <div key={kit.id} className="transform transition-all duration-300 hover:scale-[1.02]">
              <ProductCard product={kit} index={i} />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-green-dark">Want help choosing the right system?</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-brand-green-dark text-white hover:bg-brand-green-dark/90">
              <Link href="#quote">Compare Kits & Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-green/40 text-brand-green-dark hover:bg-brand-green/10">
              <Link href="#quote">WhatsApp for Kit Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
