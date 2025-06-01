import Link from "next/link"
import { TreePine, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-amber-500" />
              <div className="flex flex-col">
                <span className="text-lg font-bold">QuestBlaze</span>
                <span className="text-xs text-gray-400 -mt-1">Network</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting premium wooden Plinko boards and traditional games with expert craftsmanship and sustainable
              materials.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/plinko-heritage" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Plinko Heritage
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Care Guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-500">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-500">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Baker Street 180, London, NW1 5SD, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+44 7903 628 834</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@questblazenetwork.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} QuestBlaze Network. All rights reserved. Crafted with passion in the United
            Kingdom.
          </p>
        </div>
      </div>
    </footer>
  )
}
