"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { whatsappLink } from "@/lib/site-config"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[4.5rem] right-0 mb-2 w-[220px] rounded-2xl border border-border bg-card p-4 shadow-premium"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground hover:bg-muted"
              aria-label="Close tooltip"
            >
              <X className="size-3" />
            </button>
            <p className="font-heading text-sm font-semibold text-foreground">Need a solar quote?</p>
            <p className="mt-1 text-xs text-muted-foreground">Chat with our energy experts directly on WhatsApp.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-lg shadow-[#25D366]/30 transition-all hover:shadow-xl hover:shadow-[#25D366]/40"
      >
        {/* Subtle, softer pulse rings */}
        <div className="absolute inset-0 rounded-full border border-[#25D366] opacity-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
        
        <MessageCircle className="size-7" />
      </motion.a>
    </div>
  )
}
