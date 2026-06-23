"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button-variants"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solar Kits", href: "/#products" },
  { label: "Best Sellers", href: "/#best-sellers" },
  { label: "Components", href: "/#components" },
  { label: "Gallery", href: "/gallery" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Eclipse Power Energy home">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eclipse-logo-hpsHZDCZ2de3fFjtWJBBVdsnulVruV.png"
            alt="Eclipse Power Energy logo"
            width={56}
            height={56}
            className="h-12 w-12 object-contain"
            priority
          />
          <div className="leading-tight">
            <span
              className={`block font-heading text-lg font-extrabold tracking-tight transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              ECLIPSE
            </span>
            <span
              className={`block text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-primary" : "text-secondary"
              }`}
            >
              Power Energy
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href
                  ? "text-primary font-semibold"
                  : scrolled ? "text-foreground/80" : "text-white/85 hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#quote"
            className={`border-b-2 pb-0.5 text-sm font-medium transition-colors ${
              scrolled ? "border-primary text-primary" : "border-secondary text-secondary"
            }`}
          >
            Get Quote
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+27700000000"
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Phone
              className={`h-4 w-4 ${scrolled ? "text-primary" : "text-secondary"}`}
              aria-hidden="true"
            />
            +27 70 000 0000
          </a>
          <a
            href="#quote"
            className={buttonVariants({ className: "rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary-dark" })}
          >
            Get A Quote
          </a>
        </div>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 transition-colors md:hidden ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background shadow-sm md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2 text-base font-medium hover:bg-muted hover:text-primary ${
                  pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-base font-medium text-primary hover:bg-muted"
            >
              Get Quote
            </a>
            <a
              href="tel:+27700000000"
              className="flex items-center gap-2 px-2 py-2 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              +27 70 000 0000
            </a>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className={buttonVariants({ className: "mt-2 rounded-full bg-primary font-semibold text-primary-foreground hover:bg-primary-dark" })}
            >
              Get A Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
