"use client"

import { motion } from "framer-motion"
import { Counter } from "@/components/counter"
import { cn } from "@/lib/utils"

export type Stat = {
  value: number
  label: string
  prefix?: string
  suffix?: string
}

export function StatsSection({
  stats,
  variant = "light",
  className,
}: {
  stats: Stat[]
  variant?: "light" | "dark" | "gradient"
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-6 lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center"
        >
          <p
            className={cn(
              "font-heading text-4xl font-extrabold tracking-tight sm:text-5xl",
              variant === "dark" || variant === "gradient" ? "text-white" : "text-brand-green-dark",
            )}
          >
            <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </p>
          <p
            className={cn(
              "mt-2 text-sm font-medium",
              variant === "dark" || variant === "gradient"
                ? "text-white/80"
                : "text-muted-foreground",
            )}
          >
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
