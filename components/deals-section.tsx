"use client"

import Link from "next/link"
import { ArrowRight, Tag } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function DealsSection() {
  const deals = products.filter((p) => p.salePrice || p.badge === "Sale").slice(0, 4)

  if (deals.length === 0) return null

  return (
    <section id="best-sellers" className="scroll-mt-20 py-20 bg-destructive/5 border-y border-destructive/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-sm font-semibold text-destructive mb-4">
              <Tag className="size-4" />
              Limited Time Offers
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Best Sellers & Deals
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
              High-conversion favorite kits and components, all ready for a fast solar quote.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 group border-destructive/20 text-destructive hover:bg-destructive/10">
            <Link href="#quote">
              Request a Quote Now
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-destructive/20 bg-white/90 p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-destructive">Hot picks for quick decisions</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-destructive text-white hover:bg-destructive/90">
              <Link href="#quote">Get Quote on Deals</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-destructive/30 text-destructive hover:bg-destructive/10">
              <Link href="#quote">WhatsApp Price</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
