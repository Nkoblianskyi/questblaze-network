export interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  image: string
  category: string
  materials: string[]
  dimensions: string
  features: string[]
}

export const projects: Project[] = [
  {
    id: "vintage-style-board",
    title: "Vintage Style Board",
    description: "Retro-inspired Plinko board with classic aesthetics and traditional craftsmanship.",
    fullDescription:
      "Our Vintage Style Board pays homage to the golden age of wooden games with its classic aesthetics and traditional construction methods. Each board features aged wood finishes, brass hardware, and design elements that evoke the charm of yesteryear while maintaining modern quality standards. It's perfect for those who appreciate timeless design and traditional craftsmanship.",
    image: "/retro.png",
    category: "Vintage Boards",
    materials: ["Aged Oak Wood", "Antique Brass Pegs", "Vintage Stain Finish"],
    dimensions: "65cm x 85cm x 5cm",
    features: ["Vintage aesthetics", "Traditional methods", "Aged finishes", "Classic charm"],
  },
  {
    id: "outdoor-weather-resistant-board",
    title: "Outdoor Weather-Resistant Board",
    description: "Durable Plinko board designed for outdoor use with weather-resistant materials.",
    fullDescription:
      "Our Outdoor Weather-Resistant Board is engineered to withstand the elements while maintaining the quality and performance you expect from QuestBlaze Network. Constructed with weather-resistant materials and protective finishes, this board is perfect for garden parties, outdoor events, and permanent outdoor installations. It brings the joy of Plinko to any outdoor setting.",
    image: "/durable.png",
    category: "Outdoor Boards",
    materials: ["Treated Cedar Wood", "Stainless Steel Hardware", "Weather-Resistant Coating"],
    dimensions: "70cm x 95cm x 6cm",
    features: ["Weather resistant", "Outdoor durability", "UV protection", "All-season use"],
  },
  {
    id: "educational-plinko-board",
    title: "Educational Plinko Board",
    description: "Learning-focused Plinko board designed for educational demonstrations and probability studies.",
    fullDescription:
      "The Educational Plinko Board is specifically designed for learning environments and educational demonstrations. This board features clear markings, probability indicators, and educational materials that make it perfect for teaching concepts of chance, probability, and statistics. It's an invaluable tool for educators who want to make learning engaging and interactive.",
    image: "/education.png",
    category: "Educational Boards",
    materials: ["Sustainable Pine Wood", "Educational Markings", "Child-Safe Finish"],
    dimensions: "55cm x 75cm x 4cm",
    features: ["Educational markings", "Learning materials", "Child-safe design", "Teaching focused"],
  },
  {
    id: "classic-plinko-board",
    title: "Classic Plinko Board",
    description: "Traditional wooden Plinko board with precision-crafted pegs and smooth ball channels.",
    fullDescription:
      "Our Classic Plinko Board represents the perfect blend of traditional craftsmanship and modern precision. Each board is meticulously handcrafted from premium oak wood, featuring precisely positioned pegs that ensure optimal ball movement and unpredictable outcomes. The smooth finish and carefully calculated angles provide an authentic Plinko experience that captures the excitement of the classic game.",
    image: "/plinko.png",
    category: "Classic Boards",
    materials: ["Premium Oak Wood", "Stainless Steel Pegs", "Natural Wood Finish"],
    dimensions: "60cm x 80cm x 5cm",
    features: ["Hand-sanded finish", "Precision-placed pegs", "Durable construction", "Classic design"],
  },
  {
    id: "deluxe-plinko-set",
    title: "Deluxe Plinko Set",
    description: "Premium Plinko board set with multiple ball channels and enhanced scoring zones.",
    fullDescription:
      "The Deluxe Plinko Set elevates the traditional game with enhanced features and superior craftsmanship. This premium set includes multiple scoring zones, reinforced construction, and comes with a complete set of wooden balls. Perfect for both recreational use and professional demonstrations, this board showcases our commitment to quality and innovation in wooden game manufacturing.",
    image: "/deluxe.png",
    category: "Premium Boards",
    materials: ["Mahogany Wood", "Brass Pegs", "Polyurethane Finish"],
    dimensions: "75cm x 100cm x 6cm",
    features: ["Multiple scoring zones", "Enhanced ball channels", "Premium materials", "Professional grade"],
  },
  {
    id: "mini-plinko-board",
    title: "Mini Plinko Board",
    description: "Compact Plinko board perfect for desktop use and small spaces.",
    fullDescription:
      "Our Mini Plinko Board brings all the excitement of the full-sized game in a compact, desktop-friendly format. Despite its smaller size, this board maintains the same attention to detail and quality construction as our larger models. It's perfect for offices, small gatherings, or as an introduction to the world of Plinko games.",
    image: "/compact.png",
    category: "Compact Boards",
    materials: ["Birch Wood", "Chrome Pegs", "Matte Finish"],
    dimensions: "30cm x 40cm x 3cm",
    features: ["Space-saving design", "Portable construction", "Desktop friendly", "Full functionality"],
  },
  {
    id: "custom-themed-board",
    title: "Custom Themed Board",
    description: "Bespoke Plinko board with custom themes and personalised design elements.",
    fullDescription:
      "Our Custom Themed Boards represent the pinnacle of personalised craftsmanship. Each board is designed and built to your exact specifications, incorporating custom themes, colours, and design elements. Whether for corporate events, special occasions, or unique decorative purposes, these boards showcase our ability to blend traditional woodworking with modern customisation.",
    image: "/custom.png",
    category: "Custom Boards",
    materials: ["Various Premium Woods", "Custom Hardware", "Speciality Finishes"],
    dimensions: "Custom Dimensions",
    features: ["Fully customisable", "Unique themes", "Personalised elements", "Bespoke craftsmanship"],
  },
  {
    id: "professional-tournament-board",
    title: "Professional Tournament Board",
    description: "Competition-grade Plinko board built to professional standards and specifications.",
    fullDescription:
      "The Professional Tournament Board is engineered for serious competition and demonstration use. Built to exacting standards with reinforced construction and precision-calibrated components, this board ensures consistent performance and durability under intensive use. It's the choice of professionals who demand the highest quality and reliability.",
    image: "/prof.png",
    category: "Professional Boards",
    materials: ["Hardwood Composite", "Precision Steel Pegs", "Competition Finish"],
    dimensions: "90cm x 120cm x 8cm",
    features: ["Competition grade", "Reinforced construction", "Precision calibrated", "Professional standards"],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}

export function getAllCategories(): string[] {
  return [...new Set(projects.map((project) => project.category))]
}
