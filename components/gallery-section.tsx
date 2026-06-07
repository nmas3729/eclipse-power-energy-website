"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const galleryItems = [
  {
    src: "/residential-solar.png",
    alt: "Residential rooftop solar installation",
    title: "Residential Installation",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/commercial-solar.png",
    alt: "Commercial solar panel array",
    title: "Commercial Project",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/hybrid-solar.png",
    alt: "Hybrid solar system setup",
    title: "Hybrid System",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/product-panel.png",
    alt: "Premium monocrystalline solar panels",
    title: "Premium Panels",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/backup-power.png",
    alt: "Battery backup power system",
    title: "Battery Backup",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/product-inverter.png",
    alt: "Smart hybrid inverter unit",
    title: "Smart Inverters",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/product-battery.png",
    alt: "Lithium battery storage unit",
    title: "Energy Storage",
    span: "col-span-1 row-span-1",
  },
]

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const nextImage = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null))
  const prevImage = () =>
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null
    )

  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Quality installations you can trust"
          description="Take a closer look at our premium solar installations across South Africa."
        />

        {/* Bento grid */}
        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[240px]">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => openLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <p className="text-sm font-semibold text-white">{item.title}</p>
              </div>
              {/* Subtle always-visible gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[85vh] max-w-5xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                fill
                className="object-cover"
                sizes="90vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <p className="text-lg font-semibold text-white">
                  {galleryItems[lightbox].title}
                </p>
              </div>
            </motion.div>

            {/* Controls */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="size-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
