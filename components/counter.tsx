"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

export function Counter({
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })
  const [display, setDisplay] = useState("0")

  useEffect(() => {
    if (inView) motionValue.set(to)
  }, [inView, to, motionValue])

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      setDisplay(
        latest.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }),
      )
    })
    return () => unsub()
  }, [spring, decimals])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
