"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Loader2, Send, User, Phone, Mail, Building, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  propertyType: z.string().min(1, "Please select a property type"),
  monthlyBill: z.string().min(1, "Please select your monthly bill range"),
  message: z.string().optional(),
})

type QuoteValues = z.infer<typeof quoteSchema>

const propertyTypes = ["Residential", "Commercial", "Agricultural", "Industrial"]
const billRanges = [
  "Under R1 000",
  "R1 000 – R2 500",
  "R2 500 – R5 000",
  "R5 000 – R10 000",
  "Over R10 000",
]

export function QuoteForm({
  className,
  variant = "card",
}: {
  className?: string
  variant?: "card" | "plain"
}) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    resolver: zodResolver(quoteSchema),
  })

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitted(true)
    reset()
  }

  const fieldError = (msg?: string) =>
    msg ? (
      <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-xs font-medium text-destructive">
        {msg}
      </motion.p>
    ) : null

  return (
    <div className={cn(
      variant === "card" && "rounded-3xl border border-border bg-card p-6 shadow-premium sm:p-10 relative overflow-hidden",
      className
    )}>
      {variant === "card" && (
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand-green/5 blur-3xl" />
      )}
      
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-5 text-center min-h-[400px]"
          >
            <div className="relative flex size-20 items-center justify-center rounded-full bg-brand-green/15">
              <div className="absolute inset-0 rounded-full animate-ping bg-brand-green/20" />
              <CheckCircle2 className="size-10 text-brand-green-dark" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground">Request Received!</h3>
              <p className="mt-2 max-w-sm text-muted-foreground leading-relaxed">
                Thank you for choosing Eclipse Power Energy. One of our solar specialists will review your details and contact you within 24 hours.
              </p>
            </div>
            <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">
              Submit another request
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-5 sm:grid-cols-2 relative z-10"
          >
            {variant === "card" && (
              <div className="sm:col-span-2 mb-2">
                <h3 className="font-heading text-2xl font-bold text-foreground">Request Your Free Quote</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fill in your details below for a tailored solar estimate.</p>
              </div>
            )}

            <div className="flex flex-col gap-1.5 relative">
              <Label htmlFor="qf-name" className="font-medium">Full Name</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <User className="size-4 text-muted-foreground/70" />
                </div>
                <Input id="qf-name" placeholder="John Dlamini" className="pl-9 h-11 focus-visible:ring-brand-green/50" {...register("name")} />
              </div>
              {fieldError(errors.name?.message)}
            </div>

            <div className="flex flex-col gap-1.5 relative">
              <Label htmlFor="qf-phone" className="font-medium">Phone Number</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Phone className="size-4 text-muted-foreground/70" />
                </div>
                <Input id="qf-phone" type="tel" placeholder="071 234 5678" className="pl-9 h-11 focus-visible:ring-brand-green/50" {...register("phone")} />
              </div>
              {fieldError(errors.phone?.message)}
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2 relative">
              <Label htmlFor="qf-email" className="font-medium">Email Address</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="size-4 text-muted-foreground/70" />
                </div>
                <Input id="qf-email" type="email" placeholder="you@email.com" className="pl-9 h-11 focus-visible:ring-brand-green/50" {...register("email")} />
              </div>
              {fieldError(errors.email?.message)}
            </div>

            <div className="flex flex-col gap-1.5 relative">
              <Label htmlFor="qf-property" className="font-medium">Property Type</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
                  <Building className="size-4 text-muted-foreground/70" />
                </div>
                <select
                  id="qf-property"
                  {...register("propertyType")}
                  className="w-full h-11 appearance-none rounded-md border border-input bg-transparent pl-9 pr-8 py-1 text-sm shadow-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-brand-green/50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  {propertyTypes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              {fieldError(errors.propertyType?.message)}
            </div>

            <div className="flex flex-col gap-1.5 relative">
              <Label htmlFor="qf-bill" className="font-medium">Monthly Bill</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
                  <Receipt className="size-4 text-muted-foreground/70" />
                </div>
                <select
                  id="qf-bill"
                  {...register("monthlyBill")}
                  className="w-full h-11 appearance-none rounded-md border border-input bg-transparent pl-9 pr-8 py-1 text-sm shadow-sm outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-brand-green/50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  {billRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              {fieldError(errors.monthlyBill?.message)}
            </div>

            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label htmlFor="qf-message" className="font-medium">Message <span className="text-muted-foreground font-normal">(optional)</span></Label>
              <Textarea
                id="qf-message"
                rows={3}
                placeholder="Tell us a bit about your energy needs..."
                className="resize-none focus-visible:ring-brand-green/50"
                {...register("message")}
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="mt-2 h-12 bg-brand-green-dark text-white font-semibold shadow-md hover:bg-brand-green-dark/90 hover:shadow-lg transition-all active:scale-[0.98] sm:col-span-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="size-5 mr-2 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                <>
                  <Send className="size-5 mr-2" />
                  Request My Free Quote
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
