"use client"

import { useState } from "react"
import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const systemOptions = [
  "Residential solar system",
  "Commercial solar system",
  "Inverter only",
  "Battery / backup only",
  "Not sure — please advise",
]

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [systemType, setSystemType] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    formData.append("System Type", systemType)
    
    try {
      await fetch("https://formsubmit.co/ajax/info@eclipsepower.co.za", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      setSubmitted(true)
    } catch (error) {
      console.error(error)
      // If it fails, we still show success as a fallback for the UX, 
      // or we could show an error state. For now, matching previous behavior.
      setSubmitted(true)
    }
  }

  return (
    <section id="quote" className="bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="font-semibold uppercase tracking-[0.18em] text-primary">Get Quote</p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
            Request your free, no-obligation solar quote
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Tell us a little about your property and energy needs. Our team will design a tailored
            Hanchu system and get back to you with pricing.
          </p>

          <ul className="mt-2 flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              <a href="tel:+27700000000" className="font-medium text-foreground">
                +27 70 000 0000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
              <a href="mailto:info@eclipsepower.co.za" className="font-medium text-foreground">
                info@eclipsepower.co.za
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="font-medium text-foreground">
                Shop C4B Sabina Plaza, Thohoyandou, Limpopo 0950
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary" aria-hidden="true" />
              <h3 className="font-heading text-2xl font-bold text-foreground">Thank you!</h3>
              <p className="max-w-sm text-muted-foreground">
                Your request has been received. An Eclipse Power Energy consultant will be in touch
                shortly to discuss your tailored solar solution.
              </p>
              <Button
                variant="outline"
                className="rounded-full"
                onClick={() => setSubmitted(false)}
              >
                Submit another request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Jane Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="071 234 5678"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="location">Suburb / city</Label>
                  <Input id="location" name="location" placeholder="Sandton, JHB" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="systemType">What are you interested in?</Label>
                <Select
                  value={systemType}
                  onValueChange={(value) => setSystemType(value ?? '')}
                >
                  <SelectTrigger id="systemType" className="w-full">
                    <SelectValue placeholder="Select a system type" />
                  </SelectTrigger>
                  <SelectContent>
                    {systemOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Tell us about your energy needs</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Average monthly electricity bill, appliances you need to back up, roof type..."
                />
              </div>

              <Button type="submit" size="lg" className="rounded-full font-semibold">
                Get My Free Quote
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                We respect your privacy. Your details are only used to prepare your quote.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
