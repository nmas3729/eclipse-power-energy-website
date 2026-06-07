import {
  Home,
  Building2,
  Combine,
  MountainSnow,
  BatteryFull,
  Activity,
  type LucideIcon,
} from "lucide-react"

export type ServiceItem = {
  slug: string
  icon: LucideIcon
  title: string
  description: string
  benefits: string[]
  features: string[]
  process: string[]
}

export const services: ServiceItem[] = [
  {
    slug: "residential-solar",
    icon: Home,
    title: "Residential Solar",
    description:
      "Custom-designed solar systems that slash your home's electricity bill and keep the lights on during load-shedding.",
    benefits: ["Lower monthly bills", "Load-shedding protection", "Increased property value"],
    features: ["3–10kW systems", "Premium panels & inverters", "Mobile app monitoring"],
    process: ["Free consultation", "Roof & usage assessment", "Custom design", "Professional install"],
  },
  {
    slug: "commercial-solar",
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Scalable solar solutions that cut operating costs, reduce demand charges and boost your sustainability credentials.",
    benefits: ["Reduced overheads", "Fast return on investment", "Carbon footprint reduction"],
    features: ["High-yield arrays", "Three-phase inverters", "Energy management"],
    process: ["Site audit", "Financial modelling", "System engineering", "Turnkey installation"],
  },
  {
    slug: "hybrid-systems",
    icon: Combine,
    title: "Hybrid Solar Systems",
    description:
      "Combine grid-tied savings with battery backup security for the ultimate in flexibility and reliability.",
    benefits: ["Day & night savings", "Seamless backup", "Grid feed-in ready"],
    features: ["Smart hybrid inverters", "Lithium storage", "Automatic switching"],
    process: ["Energy profiling", "System sizing", "Installation", "Commissioning"],
  },
  {
    slug: "off-grid-solutions",
    icon: MountainSnow,
    title: "Off-Grid Solutions",
    description:
      "Complete energy independence for remote homes, farms and lodges where grid power is unreliable or unavailable.",
    benefits: ["Total independence", "No utility bills", "Reliable rural power"],
    features: ["Large battery banks", "Robust inverters", "Generator integration"],
    process: ["Load assessment", "Autonomy planning", "Installation", "Ongoing support"],
  },
  {
    slug: "battery-storage",
    icon: BatteryFull,
    title: "Battery Storage",
    description:
      "Add reliable lithium battery storage to an existing or new system to keep essentials running 24/7.",
    benefits: ["Backup during outages", "Store excess solar", "Expandable capacity"],
    features: ["LiFePO4 batteries", "6000+ cycle life", "Smart BMS protection"],
    process: ["Capacity assessment", "Battery selection", "Installation", "Configuration"],
  },
  {
    slug: "maintenance-monitoring",
    icon: Activity,
    title: "Maintenance & Monitoring",
    description:
      "Keep your system performing at its peak with proactive monitoring, servicing and rapid support.",
    benefits: ["Maximised performance", "Early fault detection", "Peace of mind"],
    features: ["Remote monitoring", "Scheduled servicing", "Priority support"],
    process: ["System health check", "Performance report", "Servicing", "Continuous monitoring"],
  },
]
