"use client"

import { motion } from "framer-motion"
import {
  PhoneCall,
  ClipboardCheck,
  PencilRuler,
  Wrench,
  PlugZap,
  HeartHandshake,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    icon: PhoneCall,
    title: "Consultation",
    desc: "We discuss your energy needs, goals and budget to understand the right solution for you.",
  },
  {
    icon: ClipboardCheck,
    title: "Site Assessment",
    desc: "Our engineers assess your property, roof and electrical setup to design a perfect fit.",
  },
  {
    icon: PencilRuler,
    title: "System Design",
    desc: "We craft a custom system design with detailed savings projections and clear pricing.",
  },
  {
    icon: Wrench,
    title: "Installation",
    desc: "Our certified installers fit your system safely, neatly and with minimal disruption.",
  },
  {
    icon: PlugZap,
    title: "Commissioning",
    desc: "We test, certify and switch on your system, ensuring everything performs optimally.",
  },
  {
    icon: HeartHandshake,
    title: "Support & Monitoring",
    desc: "Ongoing monitoring, maintenance and dedicated support to keep you powered for years.",
  },
]

export function Timeline() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Our seamless installation process"
          description="From first call to long-term support, we make going solar simple and stress-free."
        />

        <div className="relative mt-20">
          {/* Main vertical line */}
          <div className="absolute left-[28px] top-4 bottom-4 w-1 bg-gradient-to-b from-brand-yellow via-brand-green to-brand-green-dark/20 rounded-full lg:left-1/2 lg:-translate-x-1/2" />
          
          <div className="flex flex-col gap-12 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-start gap-8 lg:w-1/2 lg:py-8 ${
                  i % 2 === 0 
                    ? "lg:self-start lg:pr-16" 
                    : "lg:self-end lg:flex-row-reverse lg:pl-16 lg:text-right"
                }`}
              >
                {/* Connecting line for desktop */}
                <div 
                  className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-16 h-px bg-border ${
                    i % 2 === 0 ? "right-0" : "left-0"
                  }`} 
                />

                <div className={`relative z-10 flex shrink-0 items-center justify-center lg:absolute lg:top-1/2 lg:-translate-y-1/2 ${
                  i % 2 === 0 ? "lg:-right-7" : "lg:-left-7"
                }`}>
                  <div className="relative flex size-14 items-center justify-center rounded-full bg-card border-4 border-background shadow-md shadow-brand-green/20">
                    <div className="flex size-10 items-center justify-center rounded-full brand-gradient">
                      <step.icon className="size-4 text-foreground" />
                    </div>
                  </div>
                </div>

                <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-premium hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-heading text-4xl font-extrabold text-foreground/5 lg:absolute lg:top-4 lg:opacity-5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
