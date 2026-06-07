"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href = "/services",
  index = 0,
  className,
}: {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  index?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-lg",
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-dark transition-colors group-hover:brand-gradient group-hover:text-foreground">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green-dark"
      >
        Learn More
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}
