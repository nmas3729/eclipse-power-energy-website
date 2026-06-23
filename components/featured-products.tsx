import Image from "next/image"

const products = [
  {
    title: "Hanchu ESS 3.5kW 24V Off-Grid Inverter Combo",
    category: "SPECIALS & COMBOS",
    originalPrice: "R23,900.00",
    price: "R19,900.00",
    sale: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.5kW-Combo-300-x-300-px-l04NAbZmydNV96UjH5x73CowXXT4MX.png",
  },
  {
    title: "Hanchu ESS 3kW 48V Off-Grid Inverter Combo",
    category: "SPECIALS & COMBOS",
    originalPrice: "R29,900.00",
    price: "R26,900.00",
    sale: true,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.5kW-Combo-300-x-300-px-l04NAbZmydNV96UjH5x73CowXXT4MX.png",
  },
  {
    title: "Hanchu ESS 6kW 48V Hybrid Inverter Combo",
    category: "SPECIALS & COMBOS",
    originalPrice: null,
    price: "R45,900.00",
    sale: false,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12kW-Combo-300-x-300-px-ZrD1J9n2EZ7xV82l7DFy4ockogwjes.png",
  },
  {
    title: "Hanchu ESS 12kW 48V Hybrid Inverter Combo",
    category: "SPECIALS & COMBOS",
    originalPrice: null,
    price: "R89,900.00",
    sale: false,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12kW-Combo-300-x-300-px-ZrD1J9n2EZ7xV82l7DFy4ockogwjes.png",
  },
]

export function FeaturedProducts() {
  return (
    <section id="products" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl font-normal uppercase tracking-wide text-foreground sm:text-4xl">
            Specials & Combos
          </h2>
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <article
              key={index}
              className="group flex flex-col relative"
            >
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-white mb-4">
                {product.sale && (
                  <div className="absolute top-3 left-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground shadow-sm border border-border/40">
                    Sale!
                  </div>
                )}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="h-full w-full object-contain p-4 mix-blend-multiply"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1.5 px-1">
                <h3 className="font-medium text-[15px] leading-snug text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-[13px] text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
