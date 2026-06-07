"use client"

import { motion } from "framer-motion"
import { Check, ShieldCheck, Clock, MessageCircle } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"
import { whatsappLink } from "@/lib/site-config"

const benefits = [
  { icon: Clock, title: "Fast 24-hour response time" },
  { icon: ShieldCheck, title: "No obligation, free assessment" },
  { icon: Check, title: "Tailored to your exact needs" },
]

export function LeadGenSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Premium dark gradient background */}
      <div className="absolute inset-0 bg-foreground" />
      
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-20 top-0 size-96 rounded-full bg-brand-green/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 size-[500px] rounded-full bg-brand-yellow/10 blur-[150px]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              Get Started Today
            </span>
            <h2 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]">
              Ready to take control of your <span className="brand-text-gradient">energy future?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Stop paying high municipal tariffs and enduring load-shedding. Request a free quote today and discover how much you can save with a premium solar installation from Eclipse Power Energy.
            </p>
            
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex items-center gap-4 text-white/90">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                    <benefit.icon className="size-4" />
                  </span>
                  <span className="font-medium">{benefit.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="font-heading font-semibold text-white">Prefer to chat directly?</h3>
              <p className="mt-1 text-sm text-white/60 mb-4">Our specialists are available on WhatsApp for immediate assistance.</p>
              <a 
                href={whatsappLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#25D366]/90 hover:shadow-lg active:scale-95"
              >
                <MessageCircle className="size-5" />
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* The QuoteForm handles its own card styling with the variant prop */}
            <QuoteForm variant="card" className="shadow-2xl shadow-black/40 border-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
