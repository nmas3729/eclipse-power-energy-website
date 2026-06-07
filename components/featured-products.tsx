"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"

export function FeaturedProducts() {
  const featuredProducts = products
    .filter((p) => p.category !== "Solar Kits")
    .slice(0, 6)

  return (
    <section id="components" className="scroll-mt-20 py-20 bg-muted/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Component Shop"
            title="Core Solar Components"
            description="Upgrade your system with high-performance panels, smart inverters, and reliable battery storage."
            align="left"
          />
          <Button asChild variant="outline" className="shrink-0 group">
            <Link href="#quote">
              Request a Quote
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
