import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = [
  { label: "Solar Kits", href: "#products" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "Components", href: "#components" },
  { label: "Get Quote", href: "#quote" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eclipse-logo-hpsHZDCZ2de3fFjtWJBBVdsnulVruV.png"
                alt="Eclipse Power Energy logo"
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />
              <div className="leading-tight">
                <span className="block font-heading text-base font-extrabold text-foreground">
                  ECLIPSE
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Power Energy
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Powering Today. Empowering Tomorrow. Reliable solar and battery systems for South
              African homes and businesses.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Shop C4B Sabina Plaza
                  <br />
                  Thohoyandou, Limpopo 0950
                  <br />
                  South Africa
                  <br />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Sabina+Plaza+Thohoyandou+Limpopo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary transition-colors hover:underline"
                  >
                    View on Google Maps
                  </a>
                </span>
              </li>
              <li>
                <a
                  href="tel:+27700000000"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +27 70 000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@eclipsepower.co.za"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  info@eclipsepower.co.za
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">
              Ready to go solar?
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Request a free quote today and take control of your energy.
            </p>
            <a
              href="#quote"
              className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Quote
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Eclipse Power Energy Pty Ltd. All rights reserved.</p>
          <p className="mt-3">
            Powered by{' '}
            <a
              href="https://webcraft.nmas.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:underline"
            >
              NMAS WebCraft
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
