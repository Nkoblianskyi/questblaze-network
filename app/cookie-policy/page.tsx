import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | QuestBlaze Network",
  description:
    "QuestBlaze Network's cookie policy explaining how we use cookies and similar technologies on our website.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">Last Updated: May 31, 2025</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website.
              They allow the website to recognize your device and remember if you've been to the website before, helping
              to provide you with a better, more personalized experience.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="mb-2">QuestBlaze Network uses cookies for a variety of purposes, including to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ensure the website functions properly</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze how the website is used so we can improve it</li>
              <li>Personalize your experience</li>
              <li>Provide social media features</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function and cannot be switched off. They are usually only
              set in response to actions made by you which amount to a request for services, such as setting your
              privacy preferences, logging in, or filling in forms.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Performance Cookies</h3>
            <p className="mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance
              of our site. They help us to know which pages are the most and least popular and see how visitors move
              around the site.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Functionality Cookies</h3>
            <p className="mb-4">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by
              us or by third-party providers whose services we have added to our pages.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Managing Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies,
              or to alert you when cookies are being sent. The methods for doing so vary from browser to browser, so we
              recommend consulting your browser's help function for specific instructions.
            </p>
            <p className="mb-4">
              Please note that if you choose to disable cookies, some parts of our website may not function properly.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Third-Party Cookies</h2>
            <p className="mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
              the website and deliver advertisements that may be of interest to you.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Changes to This Cookie Policy</h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">If you have any questions about our use of cookies, please contact us at:</p>
            <p className="mb-4">
              QuestBlaze Network
              <br />
              Baker Street 180
              <br />
              London, NW1 5SD
              <br />
              United Kingdom
              <br />
              <br />
              Email: info@questblazenetwork.com
              <br />
              Phone: +44 7903 628 834
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link href="/" className="text-amber-600 hover:text-amber-700">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
