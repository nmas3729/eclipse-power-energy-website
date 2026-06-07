"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag, FileText, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  { icon: CheckCircle2, label: "Top Solar Brands" },
  { icon: CheckCircle2, label: "Nationwide Delivery" },
  { icon: CheckCircle2, label: "Expert Installation" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[80vh] flex items-center pt-20">
      <Image
        src="/hero-solar.png"
        alt="Premium solar panels installed on a residential roof"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-foreground/70" />
      {/* Brand accent gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/40 via-transparent to-transparent mix-blend-multiply" />

      <div className="relative w-full mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md"
          >
            <span className="flex size-2 rounded-full bg-brand-yellow animate-pulse" />
            South Africa&apos;s Premium Solar Store
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]"
          >
            Power your home. <br />
            <span className="brand-text-gradient">Beat load-shedding.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            Shop top-tier solar panels, hybrid inverters, and lithium batteries at competitive prices. Professional installation services available nationwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-yellow text-foreground font-semibold shadow-glow-yellow hover:bg-brand-yellow/90 transition-all text-base px-8 h-14"
            >
              <Link href="#kits">
                <ShoppingBag className="size-5 mr-2" />
                Shop Kits
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all text-base px-8 h-14"
            >
              <Link href="#quote">
                <FileText className="size-5 mr-2" />
                Get a Quick Quote
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
          >
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-2 text-white/90">
                <f.icon className="size-5 text-brand-green" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
