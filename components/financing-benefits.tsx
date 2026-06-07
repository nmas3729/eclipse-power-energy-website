"use client"

import { motion } from "framer-motion"
import { Battery, Zap, ShieldCheck, Truck } from "lucide-react"

const benefits = [
  {
    icon: Battery,
    title: "Flexible Financing",
    description: "Spread the cost of your solar system with competitive financing options.",
  },
  {
    icon: ShieldCheck,
    title: "Extended Warranties",
    description: "Up to 10 years on batteries and 25 years on solar panels.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description: "Fast, secure delivery of all equipment directly to your door.",
  },
  {
    icon: Zap,
    title: "Expert Installation",
    description: "Optional professional installation by our certified technicians.",
  },
]

export function FinancingBenefits() {
  return (
    <section className="border-y border-border bg-muted/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark">
                <benefit.icon className="size-6" />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
