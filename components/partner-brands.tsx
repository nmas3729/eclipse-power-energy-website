"use client"

import { motion } from "framer-motion"

// Placeholder for supplier logos. You'd replace these with actual SVG logos (Sunsynk, Deye, JA Solar, etc.)
const brands = [
  "Sunsynk", "Deye", "JA Solar", "Canadian Solar", "Hubble", "Pylontech", "Victron"
]

export function PartnerBrands() {
  return (
    <section className="py-12 border-b border-border overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Top tier equipment from trusted global manufacturers
        </p>
      </div>
      
      {/* Simple marquee or grid of logos */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all hover:grayscale-0">
          {brands.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="font-heading text-xl font-bold text-foreground/80 flex items-center justify-center h-12"
            >
              {/* This should be replaced with next/image logo components when available */}
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
