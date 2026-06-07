"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/site-config"

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-ZA", {
    maximumFractionDigits: 0,
  }).format(value)

export type Product = {
  id: string
  name: string
  category: string
  image: string
  description: string
  specs: string[]
  price?: number
  salePrice?: number
  badge?: "Best Seller" | "Sale" | "Limited Stock"
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {product.badge === "Sale" || product.salePrice ? (
          <span className="absolute right-3 top-3 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-white shadow-md animate-pulse">
            Sale
          </span>
        ) : product.badge === "Best Seller" ? (
          <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-md">
            Best Seller
          </span>
        ) : product.badge === "Limited Stock" ? (
          <span className="absolute right-3 top-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
            Limited Stock
          </span>
        ) : null}
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-brand-green-dark backdrop-blur">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/70">
          <span className="rounded-full bg-brand-green/10 px-2 py-1">
            {product.badge ?? "In Stock"}
          </span>
          {product.category === "Solar Kits" && (
            <span className="rounded-full bg-brand-yellow/10 px-2 py-1 text-brand-green-dark">
              Complete System
            </span>
          )}
        </div>
        <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{product.name}</h3>
        <div className="mt-2 flex items-baseline gap-2">
          {product.salePrice ? (
            <>
              <span className="font-heading text-xl font-bold text-brand-green-dark">R {formatPrice(product.salePrice)}</span>
              <span className="text-sm text-muted-foreground line-through">R {formatPrice(product.price ?? product.salePrice)}</span>
            </>
          ) : product.price ? (
            <span className="font-heading text-xl font-bold text-foreground">R {formatPrice(product.price)}</span>
          ) : (
            <span className="font-heading text-lg font-semibold text-foreground">POA</span>
          )}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <ul className="mt-4 space-y-1.5">
          {product.specs.map((spec) => (
            <li key={spec} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="size-4 shrink-0 text-brand-green-dark" />
              {spec}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Button
            asChild
            size="sm"
            className="flex-1 bg-brand-green-dark text-white hover:bg-brand-green-dark/90 shadow-sm"
          >
            <Link href={`/contact?product=${product.id}`}>
              Get Quote
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-brand-green/40 text-brand-green-dark hover:bg-brand-green/10"
          >
            <a
              href={whatsappLink(`Hi Eclipse, what is the best price for the ${product.name}?`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              WhatsApp Price
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
