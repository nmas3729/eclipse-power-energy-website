"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ChevronUp,
} from "lucide-react"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config"

const services = [
  { label: "Residential Solar", href: "/services" },
  { label: "Commercial Solar", href: "/services" },
  { label: "Hybrid Systems", href: "/services" },
  { label: "Off-Grid Solutions", href: "/services" },
  { label: "Battery Storage", href: "/services" },
  { label: "Maintenance & Monitoring", href: "/services" },
]

const products = [
  { label: "Solar Panels", href: "/products" },
  { label: "Inverters", href: "/products" },
  { label: "Lithium Batteries", href: "/products" },
  { label: "Solar Kits", href: "/products" },
  { label: "Accessories", href: "/products" },
]

const socials = [
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-foreground text-white/80 overflow-hidden">
      {/* Premium gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 brand-gradient" />
      
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 size-[600px] translate-y-1/2 translate-x-1/3 rounded-full bg-brand-green-dark/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              {siteConfig.legalName} provides premium solar power solutions for homes and
              businesses across South Africa. {siteConfig.tagline}
            </p>
            
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-3">Connect With Us</h4>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-brand-green/20 hover:text-brand-green hover:border-brand-green/30 hover:-translate-y-1"
                  >
                    <s.icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Quick Links
              </h3>
              <ul className="mt-6 space-y-3 text-[15px]">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="transition-colors hover:text-brand-yellow">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Services
              </h3>
              <ul className="mt-6 space-y-3 text-[15px]">
                {services.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-brand-yellow">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                Products
              </h3>
              <ul className="mt-6 space-y-3 text-[15px]">
                {products.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-brand-yellow">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>
            <ul className="mt-6 space-y-4 text-[15px]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand-green" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="flex items-center gap-3 transition-colors hover:text-brand-yellow">
                  <Phone className="size-5 shrink-0 text-brand-green" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className="flex items-center gap-3 transition-colors hover:text-brand-yellow">
                  <Mail className="size-5 shrink-0 text-brand-green" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-brand-green" />
                <span className="leading-relaxed">{siteConfig.hours}</span>
              </li>
            </ul>
            <Button
              asChild
              className="mt-6 w-full bg-[#25D366] text-white font-semibold shadow-md hover:bg-[#25D366]/90 transition-all hover:shadow-lg"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl relative">
          {/* Subtle gradient accent for the box */}
          <div className="absolute -left-10 top-0 size-32 bg-brand-green/20 blur-[50px]" />
          
          <div className="relative p-8 sm:p-10 flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="font-heading text-2xl font-bold text-white">
                Stay powered with our newsletter
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/60">
                Get the latest solar tips, savings insights, and exclusive industry updates delivered straight to your inbox.
              </p>
            </div>
            
            <div className="w-full max-w-md shrink-0">
              {subscribed ? (
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-brand-green bg-brand-green/10 p-4 rounded-xl border border-brand-green/20">
                  <CheckCircle2 className="size-5" />
                  Thanks for subscribing! You&apos;re on the list.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (email) setSubscribed(true)
                  }}
                  className="flex w-full flex-col sm:flex-row gap-3"
                >
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="h-12 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus-visible:ring-brand-green/50"
                    aria-label="Email address"
                  />
                  <Button type="submit" size="lg" className="h-12 bg-white text-foreground hover:bg-white/90 font-semibold px-8 whitespace-nowrap transition-all shadow-md">
                    Subscribe
                    <ArrowRight className="size-4 ml-1.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 relative z-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-[13px] font-medium text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="hidden md:block">{siteConfig.tagline}</p>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              Back to top
              <ChevronUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
