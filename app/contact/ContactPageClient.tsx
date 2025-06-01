"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to your server
    // For now, we'll just simulate a successful submission
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have questions about our Plinko boards or interested in a custom project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" required placeholder="Your first name" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" required placeholder="Your last name" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" required placeholder="Your email address" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input id="phone" type="tel" placeholder="Your phone number" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" required placeholder="How can we help?" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            required
                            placeholder="Please provide details about your inquiry..."
                            className="min-h-[150px]"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <input
                              type="checkbox"
                              id="privacyConsent"
                              required
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                            />
                            <Label htmlFor="privacyConsent" className="text-sm text-gray-600">
                              I agree to the processing of my data as described in the{" "}
                              <Link href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">
                                Privacy Policy
                              </Link>{" "}
                              and{" "}
                              <Link href="/cookie-policy" className="text-amber-600 hover:text-amber-700 underline">
                                Cookie Policy
                              </Link>
                            </Label>
                          </div>
                        </div>

                        <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12 space-y-6">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Message Sent!</h2>
                      <p className="text-gray-600">
                        Thank you for contacting QuestBlaze Network. We'll get back to you as soon as possible.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  If you prefer to reach us directly, please use the information below. We're available Monday through
                  Friday from 9:00 AM to 5:30 PM.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Our Address</h3>
                      <p className="text-gray-600">Baker Street 180, London, NW1 5SD, United Kingdom</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                      <p className="text-gray-600">+44 7903 628 834</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">info@questblazenetwork.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us & Plinko Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-gray-900">About QuestBlaze Network & Plinko</h2>
              <p className="text-xl text-gray-600">
                Discover our passion for craftsmanship and the fascinating world of Plinko
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* About Us */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
                  <p className="text-gray-700 leading-relaxed">
                    QuestBlaze Network was founded with a simple mission: to preserve and celebrate the art of
                    traditional woodworking while creating exceptional Plinko boards that bring joy and education to
                    people worldwide. Based in the heart of London, our workshop combines centuries-old techniques with
                    modern precision.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our master craftsmen have decades of experience working with premium hardwoods, ensuring each board
                    meets the highest standards of quality and durability. We believe that every Plinko board should be
                    not just a game, but a work of functional art that can be treasured for generations.
                  </p>
                </div>

                <div className="bg-amber-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-amber-800 mb-3">Our Values</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      <span>Sustainable and responsible sourcing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      <span>Handcrafted excellence in every detail</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      <span>Educational value and entertainment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                      <span>Customer satisfaction and service</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* About Plinko */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900">The Magic of Plinko</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Plinko is more than just a game—it's a fascinating demonstration of physics, probability, and chaos
                    theory in action. When a ball drops through our carefully positioned pegs, it creates an
                    unpredictable yet mathematically beautiful journey that captivates players of all ages.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our Plinko boards serve multiple purposes: entertainment for families, educational tools for schools
                    and universities, therapeutic devices for stress relief, and stunning decorative pieces that spark
                    conversation. Each board is precisely engineered to create the perfect balance of randomness and
                    control.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Why Choose Our Plinko Boards?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                      <span>Mathematically precise peg placement</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                      <span>Premium hardwood construction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                      <span>Customizable designs and sizes</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                      <span>Educational materials included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                      <span>Lifetime craftsmanship guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-2xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Ready to Experience the Magic?</h4>
                <p className="text-gray-700 mb-6">
                  Whether you're looking for a classic Plinko board, a custom educational tool, or a unique decorative
                  piece, we're here to bring your vision to life with exceptional craftsmanship and attention to detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">50+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">100%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
