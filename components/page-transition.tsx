"use client"

import type React from "react"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0)

    // Add page transition class
    document.body.classList.add("page-enter")
    document.body.classList.remove("page-enter-active")

    const timer = setTimeout(() => {
      document.body.classList.add("page-enter-active")
      document.body.classList.remove("page-enter")
    }, 10)

    return () => clearTimeout(timer)
  }, [pathname])

  return <>{children}</>
}
