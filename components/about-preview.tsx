"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
        >
          <Image
            src="/about-team.png"
            alt="Eclipse Power Energy"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Eclipse Power Energy
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We are South Africa&apos;s trusted destination for premium solar equipment. Whether you&apos;re a DIY enthusiast looking for top-tier panels and batteries, or a homeowner seeking a complete, professionally installed hybrid system, we provide the hardware and the expertise to power your independence.
          </p>
          <Button asChild size="lg" variant="outline" className="mt-8 border-brand-green/30 hover:bg-brand-green/10 text-foreground">
            <Link href="/about">
              Read Our Story
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
