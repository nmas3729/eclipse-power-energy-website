import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ComboBanner } from "@/components/combo-banner"
import { QuoteForm } from "@/components/quote-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <WhyChooseUs />
        <ComboBanner />
        <QuoteForm />
      </main>
      <SiteFooter />
    </div>
  )
}
