"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { packages } from "@/lib/data"
import { whatsappLink } from "@/lib/site-config"

export function FeaturedPackages() {
  return (
    <section id="solutions" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solar Packages"
          title="Solutions for every property"
          description="Whether you're powering a home, a business or a farm, we have a tailored solar package for you."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium-lg"
            >
              {/* Gradient accent strip at top */}
              <div className="h-1 w-full brand-gradient" />
              
              {/* Popular badge for the first package */}
              {i === 0 && (
                <div className="absolute right-3 top-4 z-10 flex items-center gap-1 rounded-full bg-brand-yellow px-3 py-1 text-xs font-bold text-foreground shadow-md">
                  <Sparkles className="size-3" />
                  Popular
                </div>
              )}
              
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">{pkg.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {pkg.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-foreground/80">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-green/15">
                        <Check className="size-3 text-brand-green-dark" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5 flex items-center gap-2">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-brand-green-dark text-white shadow-sm hover:bg-brand-green-dark/90 hover:shadow-md transition-all"
                  >
                    <Link href="/services">
                      Learn More
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-brand-green/30 text-brand-green-dark hover:bg-brand-green/10 hover:border-brand-green/50 transition-all"
                    aria-label={`Request a quote for ${pkg.title}`}
                  >
                    <a
                      href={whatsappLink(`Hi Eclipse, I'd like a quote for ${pkg.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
