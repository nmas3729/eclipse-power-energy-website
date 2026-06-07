"use client"

import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/services"

export function ServicesOverview() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="End-to-end solar services"
          description="From design to maintenance, we handle every step of your solar journey under one roof."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
