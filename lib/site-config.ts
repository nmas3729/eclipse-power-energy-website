export const siteConfig = {
  name: "Eclipse Power Energy",
  legalName: "Eclipse Power Energy Pty Ltd",
  tagline: "Powering Today. Empowering Tomorrow.",
  description:
    "Eclipse Power Energy delivers premium residential and commercial solar power solutions across South Africa. Reduce electricity costs, gain energy independence, and secure your future with certified installers and premium equipment.",
  url: "https://eclipsepowerenergy.co.za",
  phone: "+27 70 000 0000",
  phoneHref: "tel:+27700000000",
  email: "info@eclipsepowerenergy.co.za",
  emailHref: "mailto:info@eclipsepowerenergy.co.za",
  address: "Cnr Solar Drive & Energy Way, Johannesburg, Gauteng, South Africa",
  hours: "Mon – Fri: 08:00 – 17:00 | Sat: 08:00 – 13:00",
  whatsappNumber: "27700000000",
  whatsappMessage: "Hi Eclipse Power Energy, I would like a solar quote.",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
} as const

export function whatsappLink(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Solar Kits", href: "#kits" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "Components", href: "#components" },
  { label: "Get Quote", href: "#quote" },
]
