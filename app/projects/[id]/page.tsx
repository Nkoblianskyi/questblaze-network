import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft, Ruler, Package, Star } from "lucide-react"
import { getProjectById, projects } from "@/lib/data/projects"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.id)

  if (!project) {
    return {
      title: "Project Not Found | QuestBlaze Network",
    }
  }

  return {
    title: `${project.title} - Premium Plinko Board | QuestBlaze Network`,
    description: project.fullDescription,
    keywords: `${project.title}, ${project.category}, Plinko board, ${project.materials.join(", ")}`,
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-amber-600">
              Projects
            </Link>
            <span>/</span>
            <span className="text-gray-900">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-auto" />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/90 text-gray-800 text-sm">{project.category}</Badge>
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{project.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Specifications */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Ruler className="w-6 h-6 text-amber-600" />
                      <h3 className="text-lg font-semibold">Dimensions</h3>
                    </div>
                    <p className="text-gray-600">{project.dimensions}</p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Package className="w-6 h-6 text-amber-600" />
                      <h3 className="text-lg font-semibold">Category</h3>
                    </div>
                    <p className="text-gray-600">{project.category}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Materials */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Materials Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((material) => (
                    <Badge key={material} variant="outline" className="text-sm">
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto">
                    Request Similar Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">More Projects You Might Like</h2>
            <p className="text-gray-600">Explore other exceptional Plinko boards from our portfolio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Card key={relatedProject.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">{relatedProject.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{relatedProject.description}</p>
                    <Link href={`/projects/${relatedProject.id}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
