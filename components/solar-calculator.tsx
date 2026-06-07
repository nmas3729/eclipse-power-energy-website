"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calculator,
  Sun,
  PiggyBank,
  TrendingUp,
  BatteryCharging,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Counter } from "@/components/counter"

type Results = {
  systemSize: number
  monthlySavings: number
  annualSavings: number
  roiYears: number
  battery: number
}

const propertyMultipliers: Record<string, number> = {
  Residential: 1,
  Commercial: 1.3,
  Agricultural: 1.5,
}

export function SolarCalculator() {
  const [bill, setBill] = useState("")
  const [usage, setUsage] = useState("")
  const [propertyType, setPropertyType] = useState("Residential")
  const [results, setResults] = useState<Results | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  function calculate(e: React.FormEvent) {
    e.preventDefault()
    setIsCalculating(true)
    
    // Simulate calculation delay for premium feel
    setTimeout(() => {
      const monthlyBill = Number(bill) || 0
      const dailyUsage = Number(usage) || monthlyBill / 30 / 3
      const mult = propertyMultipliers[propertyType] ?? 1

      // Simplified SA-oriented estimates (R/kWh ~ R3.20, ~4.5 peak sun hours)
      const tariff = 3.2
      const monthlyKwh = monthlyBill / tariff
      const systemSize = Math.max(1, (monthlyKwh / 30 / 4.5) * mult)
      const monthlySavings = monthlyBill * 0.75
      const annualSavings = monthlySavings * 12
      const systemCost = systemSize * 18000
      const roiYears = annualSavings > 0 ? systemCost / annualSavings : 0
      const battery = Math.max(5, dailyUsage * 0.6 * mult)

      setResults({
        systemSize: Math.round(systemSize * 10) / 10,
        monthlySavings: Math.round(monthlySavings),
        annualSavings: Math.round(annualSavings),
        roiYears: Math.round(roiYears * 10) / 10,
        battery: Math.round(battery),
      })
      setIsCalculating(false)
    }, 600)
  }

  const resultCards = results
    ? [
        {
          icon: Sun,
          label: "Estimated System Size",
          value: results.systemSize,
          suffix: " kWp",
          decimals: 1,
        },
        {
          icon: PiggyBank,
          label: "Monthly Savings",
          value: results.monthlySavings,
          prefix: "R ",
        },
        {
          icon: TrendingUp,
          label: "Annual Savings",
          value: results.annualSavings,
          prefix: "R ",
        },
        {
          icon: Calculator,
          label: "Estimated ROI",
          value: results.roiYears,
          suffix: " yrs",
          decimals: 1,
        },
        {
          icon: BatteryCharging,
          label: "Battery Recommendation",
          value: results.battery,
          suffix: " kWh",
        },
      ]
    : []

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <motion.form
        onSubmit={calculate}
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-premium sm:p-8"
      >
        {/* Subtle decorative background */}
        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-green/5 blur-3xl" />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-xl brand-gradient shadow-md shadow-brand-green/20">
            <Calculator className="size-5 text-foreground" />
          </div>
          <h3 className="font-heading text-xl font-bold text-foreground">Solar Savings Calculator</h3>
        </div>

        <div className="relative z-10 mt-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="calc-bill" className="font-medium">Monthly Electricity Bill (R)</Label>
            <Input
              id="calc-bill"
              type="number"
              min={0}
              required
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="e.g. 3500"
              className="h-11 transition-all focus-visible:ring-brand-green/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="calc-usage" className="font-medium">Average Daily Usage (kWh) <span className="text-muted-foreground font-normal">— optional</span></Label>
            <Input
              id="calc-usage"
              type="number"
              min={0}
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
              placeholder="e.g. 25"
              className="h-11 transition-all focus-visible:ring-brand-green/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="calc-property" className="font-medium">Property Type</Label>
            <div className="relative">
              <select
                id="calc-property"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full h-11 appearance-none rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-brand-green/50"
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Agricultural</option>
              </select>
              {/* Custom select arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={isCalculating || !bill}
            className="mt-2 h-12 bg-brand-green-dark text-white font-semibold shadow-md hover:bg-brand-green-dark/90 transition-all active:scale-[0.98]"
          >
            {isCalculating ? (
              <span className="flex items-center gap-2">
                <Zap className="size-4 animate-pulse" />
                Calculating...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Zap className="size-4" />
                Calculate My Savings
              </span>
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Estimates only. A specialist will provide an accurate, tailored quote.
          </p>
        </div>
      </motion.form>

      <div className="lg:sticky lg:top-24">
        <AnimatePresence mode="wait">
          {results ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {resultCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md last:sm:col-span-2"
                >
                  <div className="absolute left-0 top-0 h-full w-1 brand-gradient opacity-80" />
                  <card.icon className="size-6 text-brand-green-dark" />
                  <p className="mt-4 font-heading text-3xl font-extrabold text-foreground tracking-tight">
                    <Counter
                      to={card.value}
                      prefix={card.prefix}
                      suffix={card.suffix}
                      decimals={card.decimals ?? 0}
                    />
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-muted-foreground">{card.label}</p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-border/60 bg-muted/30 p-10 text-center relative overflow-hidden"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83-54.628 54.628-.83-.83L54.627 0zm-51.1 0l51.1 51.1-.83.83-51.1-51.1.83-.83zM0 3.527l51.1 51.1-.83.83L0 4.357v-.83zm0 3.527l47.573 47.573-.83.83L0 7.884v-.83zm0 3.527l44.046 44.046-.83.83L0 11.41v-.83zm0 3.527l40.52 40.52-.83.83L0 14.938v-.83zm0 3.527l36.993 36.993-.83.83L0 18.465v-.83zm0 3.527l33.466 33.466-.83.83L0 21.992v-.83zm0 3.527l29.94 29.94-.83.83L0 25.52v-.83zm0 3.527l26.413 26.413-.83.83L0 29.047v-.83zm0 3.527l22.886 22.886-.83.83L0 32.574v-.83zm0 3.527l19.36 19.36-.83.83L0 36.1v-.83zm0 3.527l15.833 15.833-.83.83L0 39.628v-.83zm0 3.527l12.306 12.306-.83.83L0 43.155v-.83zm0 3.527l8.78 8.78-.83.83L0 46.682v-.83zm0 3.527l5.253 5.253-.83.83L0 50.21v-.83zm0 3.527l1.726 1.726-.83.83L0 53.736v-.83zm54.627-50.21l.83.83-51.1 51.1-.83-.83 51.1-51.1zm3.527 0l.83.83-47.573 47.573-.83-.83 47.573-47.573zm3.527 0l.83.83-44.046 44.046-.83-.83 44.046-44.046zm3.527 0l.83.83-40.52 40.52-.83-.83 40.52-40.52zm3.527 0l.83.83-36.993 36.993-.83-.83 36.993-36.993zm3.527 0l.83.83-33.466 33.466-.83-.83 33.466-33.466zm3.527 0l.83.83-29.94 29.94-.83-.83 29.94-29.94zm3.527 0l.83.83-26.413 26.413-.83-.83 26.413-26.413zm3.527 0l.83.83-22.886 22.886-.83-.83 22.886-22.886zm3.527 0l.83.83-19.36 19.36-.83-.83 19.36-19.36zm3.527 0l.83.83-15.833 15.833-.83-.83 15.833-15.833zm3.527 0l.83.83-12.306 12.306-.83-.83 12.306-12.306zm3.527 0l.83.83-8.78 8.78-.83-.83 8.78-8.78zm3.527 0l.83.83-5.253 5.253-.83-.83 5.253-5.253zm3.527 0l.83.83-1.726 1.726-.83-.83 1.726-1.726z' fill='%231F2937' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")"
                }}
              />
              <div className="relative z-10 flex size-20 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-dark">
                <Sun className="size-10" />
              </div>
              <h3 className="relative z-10 mt-6 font-heading text-xl font-bold text-foreground">
                Discover your solar potential
              </h3>
              <p className="relative z-10 mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
                Enter your details to see estimated system size, savings, ROI and battery
                recommendations.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
