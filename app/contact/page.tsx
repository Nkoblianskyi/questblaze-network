import type { Metadata as MetadataType } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: MetadataType = {
  title: "Contact Us - QuestBlaze Network",
  description:
    "Get in touch with QuestBlaze Network for custom Plinko boards and wooden game inquiries. Request a quote or ask questions about our craftsmanship and services.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
