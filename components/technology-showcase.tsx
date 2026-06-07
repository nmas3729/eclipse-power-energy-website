"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { products, productCategories } from "@/lib/data"
import { whatsappLink } from "@/lib/site-config"

const displayCategories = productCategories.filter((c) => c !== "Accessories")

export function TechnologyShowcase() {
  const [active, setActive] = useState("All")

  const filtered =
    active === "All"
      ? products.filter((p) => p.category !== "Accessories").slice(0, 6)
      : products.filter((p) => p.category === active).slice(0, 6)

  return (
    <section className="relative overflow-hidden bg-foreground py-20 sm:py-28">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-brand-green/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 size-80 rounded-full bg-brand-yellow/8 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Technology"
          title="Premium solar technology"
          description="We partner with world-leading manufacturers to bring you the most efficient, reliable and durable solar equipment available."
          light
        />

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {displayCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "brand-gradient text-foreground shadow-glow-green"
                  : "border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/10">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                      {product.description}
                    </p>
                    {/* Spec badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.specs.map((spec) => (
                        <span
                          key={spec}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-white/80 border border-white/5"
                        >
                          <Check className="size-3 text-brand-green" />
                          {spec}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 bg-brand-green-dark text-white hover:bg-brand-green-dark/90"
                      >
                        <Link href="/contact">
                          Get Quote
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/10"
                      >
                        <a
                          href={whatsappLink(
                            `Hi Eclipse, I'm interested in the ${product.name}. Please send more info.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="size-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
