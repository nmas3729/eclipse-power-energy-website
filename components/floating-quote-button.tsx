"use client"

import { ArrowRight } from "lucide-react"

export function FloatingQuoteButton() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href="#quote"
        className="inline-flex items-center gap-2 rounded-full bg-brand-green-dark px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-brand-green-dark/25 transition duration-200 hover:bg-brand-green-dark/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50"
      >
        Get Quote
        <ArrowRight className="size-4" />
      </a>
    </div>
  )
}
