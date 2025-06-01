"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cookie, X } from "lucide-react"
import Link from "next/link"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-6 shadow-lg border-amber-200 bg-white">
        <div className="flex items-start space-x-3">
          <Cookie className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent</h3>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to enhance your browsing experience and analyse our website traffic. By clicking "Accept",
              you consent to our use of cookies.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mb-3">
              <Button onClick={acceptCookies} className="bg-amber-600 hover:bg-amber-700 text-white flex-1">
                Accept All
              </Button>
              <Button onClick={declineCookies} variant="outline" className="flex-1">
                Decline
              </Button>
            </div>
            <Link href="/cookie-policy" className="text-xs text-amber-600 hover:text-amber-700 underline">
              Learn more about our cookie policy
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={declineCookies}
            className="h-6 w-6 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
