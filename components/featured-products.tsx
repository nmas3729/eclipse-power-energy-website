import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"

const products = [
  {
    title: "Hanchu Hybrid Inverters",
    description:
      "Reliable inverter technology to manage PV production, battery charging and backup power with precision.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hanchu%20Hybrid%20Inverters-2QNIsSiC6TVhk5wvmotDKkKFulWyZN.webp",
    dark: true,
  },
  {
    title: "Hanchu Lithium Batteries",
    description:
      "High-performance energy storage built for deep cycling, safety, and durable backup during load shedding.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lithium%20Battery-jWQWGlxDj9B3ZVc73M15pEwMRfnJyG.jpeg",
  },
  {
    title: "Residential Solar Systems",
    description:
      "Tailored home packages engineered for consistent solar production and smarter energy use.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.5kW-Combo-300-x-300-px-l04NAbZmydNV96UjH5x73CowXXT4MX.png",
  },
  {
    title: "Commercial Energy Solutions",
    description:
      "Scalable systems designed to reduce operating costs and maintain power for business-critical loads.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/commercial-solar-MDpkCA0cHIBxFddk8DOYmlNC7nYH22.png",
  },
]

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.18em] text-primary">Our Products</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Explore our range of premium Hanchu products and comprehensive solar solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div
                className={`flex aspect-square items-center justify-center overflow-hidden ${
                  product.dark ? "bg-foreground" : "bg-muted"
                }`}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">{product.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <a
                  href="#quote"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-secondary-foreground"
                >
                  Request pricing
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#quote"
            className={buttonVariants({ size: "lg", className: "rounded-full font-semibold" })}
          >
            Get a Custom System Quote
          </a>
        </div>
      </div>
    </section>
  )
}
