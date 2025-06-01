import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Droplet, ShieldCheck, PenToolIcon as Tool, Sun, Thermometer, Wind } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Care Guide - Maintaining Your Plinko Board | QuestBlaze Network",
  description:
    "Learn how to properly maintain and care for your wooden Plinko board. Expert tips on cleaning, storage, and material selection to ensure longevity.",
}

export default function CareGuidePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Care Guide & Materials</h1>
            <p className="text-xl text-amber-100 leading-relaxed">
              Ensure your Plinko board remains in perfect condition for years to come with our expert care
              recommendations and material insights.
            </p>
          </div>
        </div>
      </section>

      {/* Care Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Essential Plinko Board Care</h2>
              <p className="text-xl text-gray-600">
                Follow these recommendations to maintain your board's beauty and functionality
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Droplet className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Cleaning & Dusting</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Regularly dust your Plinko board using a soft, dry microfiber cloth to prevent buildup. For deeper
                    cleaning, lightly dampen the cloth with water or wood-specific cleaner, avoiding soaking the wood.
                    Always wipe in the direction of the grain and thoroughly dry afterwards.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Sun className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Environmental Considerations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Place your Plinko board away from direct sunlight and heat sources to prevent fading and warping.
                    Maintain consistent humidity levels (40-60%) to prevent wood expansion and contraction. Consider
                    using a humidifier or dehumidifier in extreme conditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Protective Maintenance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Apply quality wood wax or food-grade mineral oil every 6-12 months to maintain the natural luster
                    and protect the wood. Before application, ensure the surface is clean and dry. Use circular motions
                    and remove excess with a clean cloth after allowing it to penetrate.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Tool className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Hardware & Components</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Periodically check and tighten any loose hardware. For boards with removable pegs, clean both the
                    pegs and holes occasionally to ensure smooth operation. Apply a small amount of beeswax to wooden
                    pegs if they become difficult to insert or remove.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Material Selection Guide */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Material Selection Guide</h2>
              <p className="text-xl text-gray-600">
                Understanding the characteristics of different woods used in Plinko boards
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="aspect-square bg-amber-100 rounded-xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <span className="text-4xl font-bold text-amber-800">Oak</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">Oak Wood</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-amber-100 text-amber-800">Durable</Badge>
                      <Badge className="bg-amber-100 text-amber-800">Strong</Badge>
                      <Badge className="bg-amber-100 text-amber-800">Classic Grain</Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Oak is a premium choice for Plinko boards due to its exceptional strength and distinctive grain
                      pattern. It resists wear and tear effectively and develops a beautiful patina over time. Oak
                      boards require minimal maintenance and can last generations with proper care.
                    </p>
                    <div className="pt-2">
                      <h4 className="font-medium text-gray-900 mb-2">Best For:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Classic, traditional designs</li>
                        <li>High-traffic or frequent-use settings</li>
                        <li>Long-term investment pieces</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="aspect-square bg-amber-50 rounded-xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <span className="text-4xl font-bold text-amber-700">Maple</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">Maple Wood</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-amber-50 text-amber-700">Smooth</Badge>
                      <Badge className="bg-amber-50 text-amber-700">Consistent</Badge>
                      <Badge className="bg-amber-50 text-amber-700">Light Color</Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Maple is prized for its exceptionally smooth surface and consistent texture, making it ideal for
                      Plinko boards where predictable ball movement is desired. Its light color creates a contemporary
                      appearance and provides an excellent canvas for staining if desired.
                    </p>
                    <div className="pt-2">
                      <h4 className="font-medium text-gray-900 mb-2">Best For:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Professional or competition boards</li>
                        <li>Modern, minimalist designs</li>
                        <li>Educational settings where visibility is important</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="aspect-square bg-red-50 rounded-xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <span className="text-4xl font-bold text-red-900">Mahogany</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-900">Mahogany Wood</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-red-50 text-red-700">Luxurious</Badge>
                      <Badge className="bg-red-50 text-red-700">Rich Color</Badge>
                      <Badge className="bg-red-50 text-red-700">Stable</Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Mahogany represents luxury in Plinko board construction, offering a rich, deep color that develops
                      more character over time. It's highly stable and resistant to warping, making it excellent for
                      precision gameplay. The premium feel and appearance make it perfect for display pieces.
                    </p>
                    <div className="pt-2">
                      <h4 className="font-medium text-gray-900 mb-2">Best For:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Premium, showcase quality boards</li>
                        <li>Executive gifts or display pieces</li>
                        <li>Heirloom quality items</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Factors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Environmental Considerations</h2>
              <p className="text-xl text-gray-600">Understanding how environment affects your wooden Plinko board</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Thermometer className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Temperature</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Maintain your board in environments between 60-80°F (15-27°C). Extreme temperatures can cause wood
                    to expand, contract, or warp over time, affecting both appearance and functionality.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Wind className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Humidity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ideal humidity ranges from 40-60%. Too dry and wood can crack; too humid and it may swell or warp.
                    Consider using a hygrometer to monitor room conditions for valuable boards.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Sun className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Light Exposure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Avoid placement in direct sunlight or under intense artificial lighting. UV rays can fade wood
                    finishes and cause uneven aging. Use window treatments or UV-filtering glass for display cases.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Need More Specific Advice?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Our craftsmen are always happy to provide personalized recommendations for your specific Plinko board.
              Contact us with any questions about care or maintenance.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
                Get Expert Advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
