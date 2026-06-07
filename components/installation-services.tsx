"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Wrench, ShieldCheck, FileCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstallationServices() {
  return (
    <section className="bg-foreground text-white py-16 sm:py-24 relative overflow-hidden">
      {/* Subtle brand glow */}
      <div className="absolute right-0 top-0 size-96 bg-brand-green/10 blur-[100px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Need professional installation?
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Buy your equipment directly from us and let our certified solar technicians handle the heavy lifting. We ensure a safe, compliant, and neat installation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-green-dark text-white hover:bg-brand-green-dark/90">
                <Link href="/contact">Request Installation Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                <Link href="/services">View Installation Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1"
          >
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-green">
                <Wrench className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Certified Technicians</h3>
                <p className="mt-1 text-sm text-white/60">Fully qualified installers for peace of mind.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-green">
                <FileCheck className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">CoC & Compliance</h3>
                <p className="mt-1 text-sm text-white/60">We handle municipal sign-offs and certificates.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-green">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Workmanship Guarantee</h3>
                <p className="mt-1 text-sm text-white/60">Backed by our comprehensive installation warranty.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
