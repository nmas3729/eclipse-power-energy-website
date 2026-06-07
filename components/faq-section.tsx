"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { whatsappLink } from "@/lib/site-config"

const faqs = [
  {
    question: "How much can I save by switching to solar?",
    answer: "Savings depend on your current electricity usage, tariff, and the size of your solar system. On average, our residential clients save between 60% and 80% on their monthly electricity bills. With rising municipal tariffs, your savings will only increase over time."
  },
  {
    question: "Will solar protect me from load-shedding?",
    answer: "Yes, provided you install a hybrid system with battery storage. Our backup solutions ensure seamless switchover during power outages, keeping your essential appliances running without interruption."
  },
  {
    question: "How long does installation take?",
    answer: "A standard residential installation typically takes 1 to 2 days. Commercial projects vary based on size but are planned meticulously to ensure minimal disruption to your operations. We handle all compliance, including municipal approvals where required."
  },
  {
    question: "Do you offer warranties on your equipment?",
    answer: "Absolutely. We only use Tier-1 equipment. Our solar panels typically come with a 25-30 year linear performance warranty. Inverters have 5-10 year warranties, and lithium batteries feature 10-year warranties. We also provide a comprehensive workmanship guarantee."
  },
  {
    question: "Can I start small and expand my system later?",
    answer: "Yes, many of our clients start with an inverter and battery for load-shedding backup, and add solar panels later. We design our systems to be scalable, ensuring your inverter can handle future panel or battery additions."
  },
  {
    question: "Do I need municipal approval for my installation?",
    answer: "In most areas of South Africa, yes. We handle the entire SSEG (Small-Scale Embedded Generation) registration and sign-off process with an independent PR Engineer to ensure your system is fully compliant and safe."
  }
]

export function FAQSection() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8 lg:items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-24"
          >
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions about solar"
              description="Everything you need to know about making the switch to renewable energy in South Africa."
              align="left"
            />
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading font-semibold text-foreground">Still have questions?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our solar experts are ready to provide tailored advice for your specific property.
              </p>
              <Button
                asChild
                className="mt-6 w-full bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-sm"
              >
                <a href={whatsappLink("Hi Eclipse, I have a few questions before I request a quote.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4 mr-2" />
                  Chat with an Expert
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Accordion className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-card px-6 py-2 shadow-sm transition-all hover:border-brand-green/30 data-[state=open]:border-brand-green/50 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-[15px] hover:no-underline hover:text-brand-green-dark">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-[15px] pt-1 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
