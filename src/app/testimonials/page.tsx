'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Quote, Trophy } from 'lucide-react'
import Footer from '@/components/Footer'

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "S Varadarajan",
      position: "Executive Director & CEO",
      company: "Shreyas Relay Systems Ltd.",
      rating: 5,
      testimonial: "Nisha Roadways have been our trusted partners for our container movements for the last decade. They have always been very service-centric and maintained excellent transparent relationships with the company. Always ready to meet any challenges that are given to them.",
    },
    {
      id: 2,
      name: "Capt. Thaddeus Choo",
      position: "OOCL (INDIA) PVT. LTD.",
      company: "OOCL (INDIA) PVT. LTD.",
      rating: 5,
      testimonial: "At OOCL (India), we have always found Nisha Roadways services to be very prompt, transparent, and customer-oriented. Where we have challenges, Nisha Roadways is there to listen and work with us to tackle the challenges.",
    },
    {
      id: 3,
      name: "Apurva Sheth",
      position: "Director",
      company: "CKB GROUPS",
      rating: 5,
      testimonial: "[Include full testimonial from website]",
    },
    {
      id: 4,
      name: "Nitin Chhibber",
      position: "Emirates Shipping",
      company: "Emirates Shipping",
      rating: 5,
      testimonial: "Nisha Roadways Pvt. Ltd. is one of the most respected transportation companies in India. They have grown into this leadership position because they are flexible and open to changes to get the job done right—without compromising on their ethics or safety standards. NRPL is always our top choice for transportation at Emirates Shipping.",
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/80"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-24 left-8 lg:left-20 w-16 h-16 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center animate-float">
          <Quote className="w-8 h-8 text-blue-600" />
        </div>
        <div className="absolute top-32 right-8 lg:right-20 w-20 h-20 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center animate-float delay-1000">
          <Star className="w-10 h-10 text-yellow-500" />
        </div>
        <div className="absolute bottom-40 left-8 lg:left-32 w-14 h-14 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center animate-float delay-2000">
          <Trophy className="w-7 h-7 text-green-600" />
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-lg text-blue-700 font-semibold text-sm tracking-wide uppercase mt-18">
              <Star className="w-4 h-4" />
              Client Success Stories
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            What Clients Say
          </h1>
          
          <p className="text-base sm:text-lg lg:text-lg text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
            Here&apos;s what industry leaders say about working with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Link href="#testimonials" className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Read Testimonials
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-blue-600">India&apos;s Leading Companies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{testimonial.position}</p>
                    <p className="text-gray-600 mb-3">{testimonial.company}</p>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-300 mb-4" />
                  <p className="text-gray-700 leading-relaxed text-lg">{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Success Stories */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join These Companies
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ companies who&apos;ve transformed their logistics operations through our partnership approach. Experience the difference that four decades of excellence makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Start Your First Shipment
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

