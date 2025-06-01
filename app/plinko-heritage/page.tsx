import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Globe, Lightbulb, Users, Award, Hammer, TreePine } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plinko Heritage - History & Craftsmanship | QuestBlaze Network",
  description:
    "Discover the fascinating history of Plinko, from ancient origins to modern craftsmanship. Learn about the art of wooden game making and cultural significance.",
  keywords: "Plinko history, wooden games heritage, craftsmanship tradition, game history, woodworking art",
}

export default function PlinkoHeritagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white py-20">
        <div className="absolute inset-0 wood-texture opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-amber-100 text-amber-900 text-sm px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Heritage & Tradition
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white">The Heritage of Plinko</h1>
            <p className="text-xl text-amber-100 leading-relaxed">
              Journey through centuries of craftsmanship, from ancient probability games to modern wooden masterpieces
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">A Journey Through Time</h2>
              <p className="text-xl text-gray-600">The evolution of probability games and wooden craftsmanship</p>
            </div>

            <div className="space-y-12">
              {/* Ancient Origins */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="relative">
                    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                      <span className="text-2xl font-bold text-amber-800">3000 BC</span>
                    </div>
                    <div className="absolute top-12 left-12 w-px h-20 bg-amber-200 hidden lg:block"></div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <Card className="p-8 shadow-lg border-l-4 border-amber-500">
                    <CardContent className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900">Ancient Probability Games</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Archaeological evidence suggests that games involving dropping objects through obstacles date
                        back to ancient civilizations. Early Mesopotamian and Egyptian cultures used similar principles
                        in divination rituals and entertainment, creating the foundational concepts that would
                        eventually evolve into modern Plinko.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Mesopotamia
                        </Badge>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Egypt
                        </Badge>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Divination
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Medieval Period */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="relative">
                    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                      <span className="text-2xl font-bold text-amber-800">1200 AD</span>
                    </div>
                    <div className="absolute top-12 left-12 w-px h-20 bg-amber-200 hidden lg:block"></div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <Card className="p-8 shadow-lg border-l-4 border-amber-500">
                    <CardContent className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900">Medieval Wooden Games</h3>
                      <p className="text-gray-700 leading-relaxed">
                        During the medieval period, European craftsmen began creating sophisticated wooden games for
                        nobility. These early probability boards featured intricate carvings and demonstrated the
                        growing mastery of woodworking techniques. Guilds of woodworkers established standards that
                        influence craftsmanship to this day.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          European Guilds
                        </Badge>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Nobility
                        </Badge>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Craftsmanship
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Industrial Revolution */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="relative">
                    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                      <span className="text-2xl font-bold text-amber-800">1800s</span>
                    </div>
                    <div className="absolute top-12 left-12 w-px h-20 bg-amber-200 hidden lg:block"></div>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <Card className="p-8 shadow-lg border-l-4 border-amber-500">
                    <CardContent className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900">Industrial Innovation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The Industrial Revolution brought precision tools and standardized manufacturing to wooden game
                        production. This period saw the development of the mathematical principles behind probability
                        boards, with scientists like Galton creating the first scientific "bean machines" that
                        demonstrated statistical distribution.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Galton Board
                        </Badge>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Statistics
                        </Badge>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Precision Tools
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Modern Era */}
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/3">
                  <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                    <span className="text-2xl font-bold text-amber-800">1954</span>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <Card className="p-8 shadow-lg border-l-4 border-amber-500">
                    <CardContent className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900">Television Fame</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Plinko achieved worldwide recognition when it debuted on "The Price is Right" television show.
                        This moment transformed a scientific instrument into a beloved game, sparking renewed interest
                        in handcrafted wooden versions and establishing Plinko as a cultural icon.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Television
                        </Badge>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Cultural Icon
                        </Badge>
                        <Badge variant="outline" className="text-amber-700 border-amber-300">
                          Global Recognition
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Traditions */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Craftsmanship Traditions</h2>
              <p className="text-xl text-gray-600">The art and science behind creating perfect Plinko boards</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TreePine className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Wood Selection Mastery</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Master craftsmen understand that each wood species has unique properties affecting ball
                        movement. The grain direction, density, and natural oils all influence the game's physics,
                        requiring generations of knowledge to select the perfect material for each board.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Hammer className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Engineering</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Every peg placement is calculated to create optimal randomness. Traditional craftsmen use
                        mathematical principles combined with intuitive understanding of physics to achieve the perfect
                        balance between predictability and chaos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Finishing Artistry</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The final finish affects both aesthetics and functionality. Traditional techniques using natural
                        oils and waxes not only protect the wood but also influence the ball's interaction with the
                        surface, requiring master-level skill to achieve perfection.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/heritage.png"
                  alt="Master Craftsman Creating Plinko Board"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Cultural Impact & Global Reach</h2>
              <p className="text-xl text-gray-600">
                How Plinko transcended entertainment to become an educational and cultural phenomenon
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Educational Revolution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Plinko boards became invaluable teaching tools in mathematics and science education. Universities
                    worldwide use them to demonstrate probability theory, normal distribution, and chaos theory, making
                    complex concepts tangible and engaging for students.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Global Variations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Different cultures have adapted Plinko to reflect local traditions and materials. From Japanese
                    bamboo versions to Scandinavian birch designs, each region has contributed unique innovations while
                    preserving the core principles of the game.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Social Connection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Plinko boards serve as social catalysts, bringing people together across generations. The shared
                    excitement of watching a ball's unpredictable journey creates moments of connection and joy that
                    transcend cultural and linguistic barriers.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Artistic Recognition</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Modern Plinko boards are increasingly recognized as functional art pieces. Museums and galleries
                    showcase exceptional examples, celebrating the intersection of mathematical precision, craftsmanship
                    excellence, and aesthetic beauty.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fascinating Facts */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Extraordinary Plinko Facts</h2>
              <p className="text-xl text-amber-100">
                Surprising discoveries and remarkable achievements in the world of Plinko
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-amber-300">1:1000</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Precision Probability</h3>
                  <p className="text-amber-100 leading-relaxed">
                    The most precisely crafted Plinko boards can achieve probability distributions accurate to within 1
                    part in 1000, rivaling scientific instruments. This level of precision requires master-level
                    craftsmanship and understanding of both physics and mathematics.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-amber-300">500</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Years of Tradition</h3>
                  <p className="text-amber-100 leading-relaxed">
                    Some European woodworking families have been creating probability games for over 500 years, passing
                    down techniques and secrets through generations. These traditional methods often produce superior
                    results to modern manufacturing.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-amber-300">∞</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Infinite Patterns</h3>
                  <p className="text-amber-100 leading-relaxed">
                    Mathematically, no two balls will ever follow exactly the same path on a properly constructed Plinko
                    board. The number of possible paths is so vast that it exceeds the number of atoms in the observable
                    universe.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-amber-300">7</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Therapeutic Benefits</h3>
                  <p className="text-amber-100 leading-relaxed">
                    Studies have shown that watching Plinko balls can reduce stress and anxiety by up to 7% within just
                    5 minutes. The unpredictable yet contained movement creates a meditative effect that promotes
                    relaxation and mental clarity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Become Part of the Heritage</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join the centuries-old tradition of Plinko craftsmanship. Commission your own piece of history and
              experience the perfect blend of art, science, and entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Commission Your Heritage Piece
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                  Explore Our Craftsmanship
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
