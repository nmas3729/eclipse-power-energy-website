"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowLeft, X, ZoomIn, Search } from "lucide-react"

interface GalleryImage {
  id: number
  src: string
  alt: string
  description: string
  category: string
  width: number
  height: number
}

const galleryImages: GalleryImage[] = [

  {
    id: 10,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.5kW-Combo-300-x-300-px-l04NAbZmydNV96UjH5x73CowXXT4MX.png",
    alt: "Hanchu ESS 3.5kW Off-Grid Inverter Combo",
    description: "Hanchu ESS 3.5kW 24V Off-Grid Inverter Combo - Complete solar system package.",
    category: "Products",
    width: 800,
    height: 800,
  },
  {
    id: 11,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12kW-Combo-300-x-300-px-ZrD1J9n2EZ7xV82l7DFy4ockogwjes.png",
    alt: "Hanchu ESS 12kW Hybrid Inverter Combo",
    description: "Hanchu ESS 12kW 48V Hybrid Inverter Combo - High capacity system for large residential or commercial use.",
    category: "Products",
    width: 800,
    height: 800,
  },
  {
    id: 12,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hanchu%20Hybrid%20Inverters-2QNIsSiC6TVhk5wvmotDKkKFulWyZN.webp",
    alt: "Hanchu Hybrid Inverters",
    description: "Premium Hanchu Hybrid Inverter - Reliable technology to manage PV production.",
    category: "Products",
    width: 800,
    height: 800,
  },
  {
    id: 13,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lithium%20Battery-jWQWGlxDj9B3ZVc73M15pEwMRfnJyG.jpeg",
    alt: "Hanchu Lithium Batteries",
    description: "Hanchu Lithium Battery - High-performance energy storage built for deep cycling.",
    category: "Products",
    width: 800,
    height: 800,
  },
]

const categories = ["All", "Products"]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 pt-20">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.24_0.02_150)] via-[oklch(0.30_0.05_140)] to-[oklch(0.35_0.08_135)] py-24 text-center">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 50%, oklch(0.785 0.168 132) 0%, transparent 60%), radial-gradient(circle at 75% 50%, oklch(0.835 0.166 92) 0%, transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-4 flex flex-col items-center">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 text-sm font-medium text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-secondary">
              Our Work
            </span>
            <h1 className="mb-4 font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Project Gallery
            </h1>
            <p className="text-base text-white/70 sm:text-lg">
              Browse our completed solar installations, battery systems, and energy solutions across South Africa.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-20 z-30 border-b border-border bg-background/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-4 sm:px-6">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
            {categories.map((cat) => (
              <button
                key={cat}
                id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((img) => (
              <article
                key={img.id}
                id={`gallery-item-${img.id}`}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                onClick={() => setLightbox(img)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                    <ZoomIn className="h-10 w-10 scale-75 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                  </div>
                  <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    {img.category}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{img.description}</p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-muted-foreground">
              No projects found in this category.
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-muted/40 py-16 text-center">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="mb-3 font-heading text-2xl font-bold text-foreground">
              Ready for your own installation?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Get a free, no-obligation quote tailored to your home or business.
            </p>
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              Get a Free Quote
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Lightbox */}
      {lightbox && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="lightbox-close"
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-black/90"
              aria-label="Close lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src.replace("w=800", "w=1200")}
              alt={lightbox.alt}
              className="max-h-[60vh] w-full object-cover"
            />
            <div className="p-5">
              <span className="mb-2 inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                {lightbox.category}
              </span>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
