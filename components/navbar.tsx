"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hash, setHash] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash)
    updateHash()
    window.addEventListener("hashchange", updateHash)
    return () => window.removeEventListener("hashchange", updateHash)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-lg shadow-foreground/[0.03] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const active = link.href.startsWith("#")
              ? hash === link.href || (link.href === "#home" && !hash)
              : pathname === link.href

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    active
                      ? "text-brand-green-dark"
                      : "text-foreground/70 hover:bg-brand-green/5 hover:text-brand-green-dark",
                    scrolled ? "" : "text-white/90 hover:text-white hover:bg-white/10",
                    scrolled && active && "text-brand-green-dark",
                    !scrolled && active && "text-white",
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full brand-gradient"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled
                ? "text-foreground/70 hover:text-brand-green-dark"
                : "text-white/80 hover:text-white",
            )}
          >
            <Phone className="size-4" />
            <span className="hidden xl:inline">{siteConfig.phone}</span>
          </a>
          <div className={cn("h-5 w-px", scrolled ? "bg-border" : "bg-white/20")} />
          <Button
            asChild
            className="bg-brand-green-dark text-white shadow-md shadow-brand-green-dark/20 hover:bg-brand-green-dark/90 hover:shadow-lg hover:shadow-brand-green-dark/25 transition-all"
          >
            <Link href="/contact">Get A Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            "inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden",
            scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10",
          )}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-background shadow-2xl lg:hidden"
            >
              {/* Gradient accent bar */}
              <div className="h-1 w-full brand-gradient" />
              
              <div className="flex items-center justify-between p-6 pb-4">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 text-foreground hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="size-6" />
                </button>
              </div>

              <ul className="flex-1 overflow-y-auto px-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center rounded-xl px-4 py-3.5 text-lg font-medium transition-all duration-200",
                        pathname === link.href
                          ? "bg-brand-green/10 text-brand-green-dark font-semibold"
                          : "text-foreground hover:bg-muted",
                      )}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <span className="ml-auto h-2 w-2 rounded-full brand-gradient" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-border p-6 space-y-3">
                <Button asChild size="lg" className="w-full bg-brand-green-dark text-white shadow-md hover:bg-brand-green-dark/90">
                  <Link href="/contact" onClick={() => setOpen(false)}>Get A Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10"
                >
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    WhatsApp Us
                  </a>
                </Button>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground"
                >
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
