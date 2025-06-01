"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export default function ScrollTopHandler() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo(0, 0)
  }, [pathname, searchParams])

  return null
}
