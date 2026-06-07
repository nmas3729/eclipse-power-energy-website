"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    name: "Thabo Molefe",
    role: "Homeowner, Pretoria",
    rating: 5,
    text: "Eclipse Power Energy transformed our home. We have not felt a single load-shedding interruption since installation, and our electricity bill dropped by more than half. Truly professional from start to finish.",
  },
  {
    name: "Sarah van Wyk",
    role: "Restaurant Owner, Cape Town",
    rating: 5,
    text: "Our commercial installation paid for itself faster than expected. The team handled everything seamlessly and the monitoring app lets me track our savings daily. Highly recommended.",
  },
  {
    name: "Pranav Naidoo",
    role: "Homeowner, Durban",
    rating: 5,
    text: "From the first consultation to commissioning, the Eclipse team was knowledgeable and transparent. Premium equipment, neat workmanship, and excellent after-sales support.",
  },
  {
    name: "Lerato Khumalo",
    role: "Farm Manager, Free State",
    rating: 5,
    text: "Our off-grid agricultural system has been flawless. Reliable power for our irrigation and cold storage, even in the most remote part of the farm. A brilliant investment.",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    [],
  )
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  const t = testimonials[index]

  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by homes & businesses"
          description="Don't just take our word for it — hear from the customers powering their future with Eclipse."
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-3xl bg-card p-8 shadow-lg sm:p-12">
            <Quote className="size-10 text-brand-yellow" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-heading font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-brand-yellow text-brand-yellow" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-brand-green/10"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-brand-green-dark" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-brand-green/10"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
