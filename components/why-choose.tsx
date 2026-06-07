"use client"

import { motion } from "framer-motion"
import {
  Award,
  Wrench,
  PiggyBank,
  Power,
  BatteryCharging,
  Headphones,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const reasons = [
  { icon: Award, title: "Premium Products", desc: "Only Tier-1 panels, inverters and lithium batteries from trusted global manufacturers." },
  { icon: Wrench, title: "Expert Installations", desc: "Certified technicians delivering neat, compliant workmanship on every project." },
  { icon: PiggyBank, title: "Cost Savings", desc: "Slash your electricity bill and protect yourself against rising tariff hikes." },
  { icon: Power, title: "Energy Independence", desc: "Take full control of your power supply and beat load-shedding for good." },
  { icon: BatteryCharging, title: "Battery Backup", desc: "Reliable lithium storage that keeps your home or business powered around the clock." },
  { icon: Headphones, title: "Excellent Support", desc: "Dedicated after-sales care, ongoing monitoring and a team that's always one call away." },
]

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 sm:py-28">
      {/* Refined gradient orbs */}
      <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-brand-green/15 blur-[120px] animate-pulse-slow" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-brand-yellow/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Eclipse"
          title="The smart choice for solar"
          description="Everything you need for a reliable, cost-saving and future-proof energy system."
          light
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1"
            >
              {/* Numbered badge */}
              <div className="flex items-start justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl brand-gradient shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <r.icon className="size-6 text-foreground" />
                </div>
                <span className="font-heading text-3xl font-extrabold text-white/[0.06] transition-colors duration-300 group-hover:text-white/[0.12]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
