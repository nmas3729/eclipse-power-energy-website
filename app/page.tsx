import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloatingQuoteButton } from "@/components/floating-quote-button"
import { Hero } from "@/components/hero"
import { SystemSizeSelector } from "@/components/system-size-selector"
import { FeaturedKits } from "@/components/featured-kits"
import { DealsSection } from "@/components/deals-section"
import { FeaturedProducts } from "@/components/featured-products"
import { ProductCategories } from "@/components/product-categories"
import { FinancingBenefits } from "@/components/financing-benefits"
import { InstallationServices } from "@/components/installation-services"
import { AboutPreview } from "@/components/about-preview"
import { GallerySection } from "@/components/gallery-section"
import { LeadGenSection } from "@/components/lead-gen-section"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SystemSizeSelector />
        <FeaturedKits />
        <DealsSection />
        <FeaturedProducts />
        <ProductCategories />
        <FinancingBenefits />
        <InstallationServices />
        <AboutPreview />
        <GallerySection />
        <LeadGenSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingQuoteButton />
    </>
  )
}
