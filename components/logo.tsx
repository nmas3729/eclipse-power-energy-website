import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  showText = true,
  variant = "default",
}: {
  className?: string
  showText?: boolean
  variant?: "default" | "light"
}) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)} aria-label="Eclipse Power Energy home">
      <Image
        src="/eclipse-logo.png"
        alt="Eclipse Power Energy logo"
        width={48}
        height={48}
        className="h-10 w-10 object-contain"
        priority
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading text-lg font-extrabold tracking-tight",
              variant === "light" ? "text-white" : "text-foreground",
            )}
          >
            ECLIPSE
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold tracking-[0.2em]",
              variant === "light" ? "text-white/70" : "text-brand-green-dark",
            )}
          >
            POWER ENERGY
          </span>
        </span>
      )}
    </Link>
  )
}
