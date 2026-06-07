"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Award,
  FileCheck,
  Headphones,
  Zap,
  MapPin,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const indicators = [
  {
    icon: ShieldCheck,
    title: "Certified Installers",
    desc: "Fully accredited, qualified solar technicians for safe, compliant installations.",
  },
  {
    icon: Award,
    title: "Premium Equipment",
    desc: "Tier-1 panels, inverters and lithium batteries from globally trusted brands.",
  },
  {
    icon: FileCheck,
    title: "Long-Term Warranties",
    desc: "Industry-leading product and workmanship warranties for total peace of mind.",
  },
  {
    icon: Headphones,
    title: "Professional Support",
    desc: "Dedicated after-sales support and a team that's always one call away.",
  },
  {
    icon: Zap,
    title: "Fast Installation",
    desc: "Efficient, neat installs that get you saving sooner — with minimal disruption.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    desc: "Deep knowledge of South African conditions, tariffs and load-shedding needs.",
  },
]

export function TrustSection() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Trust Us"
          title="Solar done right, every time"
          description="We combine premium products with expert workmanship to deliver systems that last."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {indicators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-premium hover:-translate-y-0.5"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-yellow/20 via-brand-green/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ zIndex: 0, padding: '1px' }}>
                <div className="h-full w-full rounded-2xl bg-card" />
              </div>
              
              <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow/10 text-brand-green-dark transition-all duration-300 group-hover:brand-gradient group-hover:text-foreground group-hover:shadow-glow-green">
                <item.icon className="size-6" />
              </div>
              <div className="relative z-10">
                <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
