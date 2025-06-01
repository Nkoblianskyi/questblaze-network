import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | QuestBlaze Network",
  description:
    "QuestBlaze Network's privacy policy detailing how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">Last Updated: May 31, 2025</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              QuestBlaze Network ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              questblazenetwork.com and use our services.
            </p>
            <p className="mb-4">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
              please do not access the site.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-2">We may collect information about you in a variety of ways including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Personal Data:</strong> Personally identifiable information such as your name, email address,
                and telephone number that you voluntarily provide when contacting us or submitting inquiries.
              </li>
              <li>
                <strong>Usage Data:</strong> Information on how you access and use our website, such as your browser
                type, access times, pages viewed, and referring website addresses.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies
                to track activity on our website and hold certain information.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-2">We may use the information we collect about you for various purposes, including to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our website and services</li>
              <li>Process and complete transactions</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Monitor and analyze usage trends</li>
              <li>Protect against, identify, and prevent fraud and other illegal activity</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p className="mb-2">
              We may share information we have collected about you in certain situations, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>With Service Providers:</strong> We may share your information with third-party vendors and
                service providers who perform services for us.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a
                portion of our assets, your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or
                in response to valid requests by public authorities.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We use administrative, technical, and physical security measures to help protect your personal information
              from unauthorized access and disclosure. However, no website or internet transmission is completely
              secure.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-2">You have certain rights regarding your personal data, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access information we hold about you</li>
              <li>The right to request correction of your personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
            <p className="mb-4">To exercise these rights, please contact us using the details provided below.</p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
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
