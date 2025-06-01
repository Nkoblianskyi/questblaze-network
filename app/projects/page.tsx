import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { projects, getAllCategories } from "@/lib/data/projects"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Projects - Premium Plinko Boards | QuestBlaze Network",
  description:
    "Explore our portfolio of handcrafted Plinko boards. From classic designs to custom creations, discover the quality and craftsmanship that sets QuestBlaze Network apart.",
  keywords: "Plinko board projects, custom wooden boards, handcrafted games, UK manufacturers",
}

export default function ProjectsPage() {
  const categories = getAllCategories()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-white">Our Plinko Board Projects</h1>
            <p className="text-xl text-gray-300 leading-relaxed text-white">
              Discover our portfolio of meticulously crafted Plinko boards, each one a testament to our commitment to
              quality, innovation, and traditional craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">About Our Craftsmanship</h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At QuestBlaze Network, each Plinko board represents decades of woodworking expertise and passion for
              traditional craftsmanship. Our master artisans combine time-honoured techniques with modern precision to
              create boards that are not just games, but functional works of art. Every project showcases our commitment
              to sustainability, quality, and the timeless beauty of natural wood.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="bg-amber-50 px-4 py-2 rounded-full">
                <span className="text-amber-800 font-medium">Handcrafted Excellence</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-full">
                <span className="text-amber-800 font-medium">Sustainable Materials</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-full">
                <span className="text-amber-800 font-medium">Precision Engineering</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-full">
                <span className="text-amber-800 font-medium">Custom Designs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-white flex flex-col h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800">{project.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.materials.slice(0, 2).map((material) => (
                          <Badge key={material} variant="secondary" className="text-xs">
                            {material}
                          </Badge>
                        ))}
                        {project.materials.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.materials.length - 2} more
                          </Badge>
                        )}
                      </div>

                      <div className="text-sm text-gray-500">Dimensions: {project.dimensions}</div>
                    </div>
                  </div>

                  <div className="pt-4 mt-auto">
                    <Link href={`/projects/${project.id}`}>
                      <Button className="w-full group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Inspired by Our Work?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Let's discuss your custom Plinko board project. Our team is ready to bring your unique vision to life with
              the same quality and craftsmanship you see here.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                Start Your Custom Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
