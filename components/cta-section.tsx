"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/site-config"

export function CTASection({
  title = "Ready To Start Saving?",
  description = "Join hundreds of South African homes and businesses already enjoying reliable, affordable solar power with Eclipse Power Energy.",
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <Image
        src="/cta-solar.png"
        alt="Solar panel field at sunset"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/90 via-brand-green-dark/80 to-brand-green/70" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-balance font-heading text-3xl font-bold text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-brand-yellow text-foreground hover:bg-brand-yellow/90"
            >
              <Link href="/contact">
                Request A Quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Contact Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
