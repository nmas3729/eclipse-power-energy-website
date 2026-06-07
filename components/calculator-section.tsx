import { SectionHeading } from "@/components/section-heading"
import { SolarCalculator } from "@/components/solar-calculator"

export function CalculatorSection() {
  return (
    <section id="calculator" className="scroll-mt-20 bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Calculate Your Savings"
          title="See how much you could save"
          description="Get an instant estimate of your ideal system size, monthly savings and return on investment."
        />
        <div className="mt-14">
          <SolarCalculator />
        </div>
      </div>
    </section>
  )
}
