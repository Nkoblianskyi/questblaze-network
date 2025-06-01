import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Sparkles,
  Users,
  Lightbulb,
  Target,
  Clock,
  TreePine,
  Hammer,
  Award,
  Droplet,
  ShieldCheck,
} from "lucide-react"
import { projects } from "@/lib/data/projects"

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 wood-texture">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInLeft">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Premium Craftsmanship
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Masterfully Crafted
                  <span className="text-amber-600 block">Plinko Boards</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover the art of traditional woodworking with our premium Plinko boards. Each piece is meticulously
                  handcrafted using sustainable materials and time-honoured techniques.
                </p>
              </div>

            </div>
            <div className="relative animate-fadeInRight">
              <div className="relative z-0">
                <img
                  src="/hero.png"
                  alt="Premium Plinko Board Showcase"
                  className="w-full h-auto rounded-2xl shadow-2xl animate-float"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full animate-bounce-gentle opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full animate-pulse opacity-40"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 z-20">
              <Link href="/projects">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white group btn-animate">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 hover-lift"
                >
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Plinko Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 animate-fadeInUp">What is Plinko?</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Plinko is a captivating game of chance that combines physics, probability, and pure excitement. Players
                drop balls from the top of a pegged board, watching as they bounce unpredictably through a maze of
                obstacles before landing in scoring zones below.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 hover:shadow-lg transition-shadow hover-lift animate-fadeInUp animate-stagger-1">
                <CardContent className="text-center space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Simple Concept</h3>
                  <p className="text-gray-600">
                    Drop a ball from the top and watch it navigate through pegs, creating endless entertainment.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow hover-lift animate-fadeInUp animate-stagger-2">
                <CardContent className="text-center space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <Lightbulb className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Educational Value</h3>
                  <p className="text-gray-600">
                    Perfect for teaching probability, physics, and mathematical concepts in an engaging way.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow hover-lift animate-fadeInUp animate-stagger-3">
                <CardContent className="text-center space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Universal Appeal</h3>
                  <p className="text-gray-600">
                    Enjoyed by all ages, from children learning about chance to adults seeking entertainment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Preview Section */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white">
        <div className="absolute inset-0 wood-texture opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInLeft">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-900 text-sm px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  Heritage & Tradition
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">The Rich Heritage of Plinko</h2>
                <p className="text-xl text-amber-100 leading-relaxed">
                  Journey through centuries of craftsmanship, from ancient probability games to modern wooden
                  masterpieces. Discover how this beloved game evolved from scientific instruments to cultural icons.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-amber-300">3000 BC</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Ancient Origins</h3>
                  <p className="text-amber-100 text-sm">
                    Early probability games in Mesopotamian and Egyptian cultures laid the foundation for modern Plinko.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold text-amber-300">1954</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Television Fame</h3>
                  <p className="text-amber-100 text-sm">
                    Plinko achieved worldwide recognition on "The Price is Right," becoming a cultural phenomenon.
                  </p>
                </div>
              </div>

              <Link href="/plinko-heritage">
                <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100 btn-animate">
                  Explore Full Heritage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-fadeInRight">
              <img
                src="/heritage.png"
                alt="Plinko Heritage Timeline"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Variations Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Plinko Board Variations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From classic designs to custom creations, we offer a diverse range of Plinko boards to suit every need and
              preference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden card-hover animate-fadeInUp animate-stagger-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-amber-50 group-hover:border-amber-300">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white btn-animate">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Care Guide Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fadeInLeft">
              <img
                src="/care.png"
                alt="Plinko Board Care Guide"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl -z-10"></div>
            </div>

            <div className="space-y-8 animate-fadeInRight">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-amber-800 text-sm px-4 py-2">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  Care & Maintenance
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Keep Your Plinko Board Perfect</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Learn expert tips and techniques to maintain your wooden Plinko board's beauty and functionality. From
                  cleaning to storage, ensure your investment lasts for generations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Cleaning & Dusting</h3>
                  <p className="text-gray-600 text-sm">
                    Regular maintenance with proper techniques to preserve the wood's natural beauty and finish.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <TreePine className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Wood Selection</h3>
                  <p className="text-gray-600 text-sm">
                    Understanding different wood types and their unique care requirements for optimal longevity.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Protective Care</h3>
                  <p className="text-gray-600 text-sm">
                    Apply quality finishes and protective treatments to maintain durability and appearance.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Hammer className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Hardware Maintenance</h3>
                  <p className="text-gray-600 text-sm">
                    Keep pegs and components in perfect condition for smooth operation and optimal gameplay.
                  </p>
                </div>
              </div>

              <Link href="/care-guide">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white btn-animate">
                  View Complete Care Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fadeInLeft">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Traditional Techniques, Modern Precision
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our master craftsmen combine centuries-old woodworking traditions with modern precision tools to
                  create Plinko boards that are both beautiful and functional.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Materials</h3>
                    <p className="text-gray-600">
                      We source only the finest sustainable hardwoods, ensuring each board is both environmentally
                      responsible and built to last generations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Handcrafted Excellence</h3>
                    <p className="text-gray-600">
                      Every board is meticulously handcrafted by skilled artisans who take pride in their work, ensuring
                      exceptional quality and attention to detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Each board undergoes rigorous quality testing to ensure perfect balance, smooth operation, and
                      long-lasting durability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fadeInRight">
              <img
                src="/craftman.png"
                alt="Craftsman at Work"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-wood text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeInUp">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-black">Ready to Create Your Perfect Plinko Board?</h2>
            <p className="text-xl opacity-90 leading-relaxed text-black">
              Whether you need a classic design or a completely custom creation, our master craftsmen are ready to bring
              your vision to life with exceptional quality and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-amber-800 hover:bg-gray-100 btn-animate">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10 hover-lift">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
