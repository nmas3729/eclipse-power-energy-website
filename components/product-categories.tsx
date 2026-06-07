"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"

const categories = [
  { name: "Power Generation", image: "/product-panel.png", href: "#components" },
  { name: "Energy Control", image: "/product-inverter.png", href: "#components" },
  { name: "Energy Storage", image: "/product-battery.png", href: "#components" },
  { name: "Complete Systems", image: "/product-kit.png", href: "#kits" },
  { name: "System Accessories", image: "/product-accessory.png", href: "#components" },
]

export function ProductCategories() {
  return (
    <section id="systems" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="System Building Blocks"
          description="Browse the key components that make a complete solar system — from generation to storage and control."
        />
        
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={cat.href} className="group block text-center">
                <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-full bg-muted p-6 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                  <Image
                    src={cat.image || "/placeholder.svg"}
                    alt={cat.name}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  {/* Subtle brand border on hover */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent transition-colors duration-300 group-hover:border-brand-green/30" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground group-hover:text-brand-green-dark transition-colors">
                  {cat.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
