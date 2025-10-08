'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Star, Quote, Users, Award, Target, Shield, Heart, MapPin, Mail, Phone, Calendar, CheckCircle, TrendingUp, Globe, Clock, Briefcase, GraduationCap, Zap, BarChart3, BookOpen, Trophy, Circle, FileText, Factory, Truck, Building2, Wrench, Cpu, Plane, Fuel, ShoppingCart, HardHat, Beaker, Package, Filter, Play, Download, ExternalLink, ChevronRight, Building, Anchor, Pill, Shirt, Smartphone, Cog, Hammer, Palette, Lightbulb, Zap as Energy, Store, HardHat as Construction, Droplets } from 'lucide-react'

export default function TestimonialsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  
  const industries = ['All', 'Chemicals', 'Shipping', 'Pharmaceuticals', 'Textiles', 'FMCG', 'Electronics', 'Engineering', 'Entertainment', 'Energy', 'Retail', 'Construction', 'Oil & Gas', 'Steel', 'Cement', 'Aviation']

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar Sharma",
      position: "Chief Operations Officer",
      company: "Tata Steel Limited",
      industry: "Steel",
      image: "/api/placeholder/80/80",
      rating: 5,
      testimonial: "Nisha Roadways has been our trusted logistics partner for over 12 years. Their expertise in handling heavy steel products, including coils and structural materials, is unmatched. What sets them apart is their proactive approach to route planning and their ability to handle our most challenging shipments with zero damage. Their team understands the criticality of our operations and consistently delivers beyond expectations.",
      keyMetrics: "12+ years partnership, Zero damage claims, 98.5% on-time delivery"
    },
    {
      id: 2,
      name: "Dr. Priya Mehta",
      position: "Supply Chain Director",
      company: "Sun Pharmaceutical Industries",
      industry: "Pharmaceuticals",
      image: "/api/placeholder/80/80",
      rating: 5,
      testimonial: "In the pharmaceutical industry, there's no room for error. Nisha Roadways' temperature-controlled transportation and their meticulous documentation process have been crucial for our regulatory compliance. Their drivers are trained in pharmaceutical handling protocols, and their real-time monitoring gives us complete visibility. They've helped us maintain our zero-deviation record across all shipments.",
      keyMetrics: "Temperature compliance: 100%, Documentation accuracy: 99.9%, Regulatory adherence: Perfect"
    },
    {
      id: 3,
      name: "Captain Vikram Singh",
      position: "Logistics Head",
      company: "Maersk Line India",
      industry: "Shipping",
      image: "/api/placeholder/80/80",
      rating: 5,
      testimonial: "As pioneers in empty container transportation by road, Nisha Roadways revolutionized our inland logistics. Their innovative approach reduced our container repositioning costs by 35% while improving turnaround times. Their understanding of port operations and container handling is exceptional. They've been instrumental in optimizing our supply chain efficiency across major Indian ports.",
      keyMetrics: "35% cost reduction, 40% faster turnaround, 15+ ports covered"
    },
    {
      id: 4,
      name: "Amit Patel",
      position: "Project Manager",
      company: "Larsen & Toubro Construction",
      industry: "Construction",
      image: "/api/placeholder/80/80",
      rating: 5,
      testimonial: "Managing construction logistics across multiple project sites requires a partner who understands the complexity of heavy machinery transportation. Nisha Roadways' project cargo expertise and their ability to handle oversized equipment has been invaluable. Their route surveys and permit management saved us significant time and costs. They're not just transporters; they're logistics consultants who add real value to our projects.",
      keyMetrics: "50+ project sites served, 100% permit success rate, 25% time savings"
    },
    {
      id: 5,
      name: "Sneha Agarwal",
      position: "Founder & CEO",
      company: "EcoTech Innovations",
      industry: "Electronics",
      image: "/api/placeholder/80/80",
      rating: 5,
      testimonial: "As a growing startup in the electronics space, we needed a logistics partner who could scale with us. Nisha Roadways provided the reliability of an established company with the flexibility we needed. Their escort services for high-value shipments and their damage-free track record gave us the confidence to expand nationally. They've been crucial in our journey from a startup to a recognized brand.",
      keyMetrics: "3x business growth supported, Zero theft incidents, 99.2% delivery accuracy"
    },
    {
      id: 6,
      name: "Colonel Rajesh Khanna (Retd.)",
      position: "Operations Director",
      company: "Bharat Heavy Electricals Limited",
      industry: "Engineering",
      image: "/api/placeholder/80/80",
      rating: 5,
      testimonial: "BHEL's heavy engineering equipment requires specialized handling that few companies can provide. Nisha Roadways' technical expertise in load calculations, their custom securing methods, and their experienced crew have made them our preferred partner for critical shipments. During the recent turbine transportation project, their precision and attention to detail ensured flawless execution. Their reliability is military-grade.",
      keyMetrics: "500+ heavy equipment moves, 100% safety record, 15+ year partnership"
    }
  ]

  const caseStudies = [
    {
      title: "Container Shipping Revolution",
      client: "Major Shipping Line",
      industry: "Shipping & Logistics",
      challenge: "Inefficient empty container repositioning causing 40% cost overruns and port congestion",
      solution: "Pioneered road-based empty container transportation with optimized routing algorithms",
      results: ["35% reduction in repositioning costs", "50% faster container turnaround", "Eliminated port congestion delays"],
      timeline: "6 months implementation",
      icon: <Anchor className="w-8 h-8" />
    },
    {
      title: "Pharmaceutical Cold Chain Excellence",
      client: "Leading Pharma Company",
      industry: "Pharmaceuticals",
      challenge: "Temperature-sensitive drug transportation with zero tolerance for deviations",
      solution: "Implemented GPS-enabled temperature monitoring with real-time alerts and backup systems",
      results: ["100% temperature compliance achieved", "Zero product loss incidents", "Regulatory audit success rate: 100%"],
      timeline: "3 months setup",
      icon: <Pill className="w-8 h-8" />
    },
    {
      title: "Steel Industry Optimization",
      client: "Major Steel Manufacturer",
      industry: "Steel & Heavy Industry",
      challenge: "Heavy steel coil transportation with frequent damage claims and delays",
      solution: "Developed specialized securing techniques and route optimization for heavy cargo",
      results: ["Zero damage claims in 2 years", "30% reduction in transit time", "98.5% on-time delivery rate"],
      timeline: "4 months optimization",
      icon: <Factory className="w-8 h-8" />
    }
  ]

  const filteredTestimonials = selectedIndustry === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.industry === selectedIndustry)

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
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-lg text-blue-700 font-semibold text-sm tracking-wide uppercase mb-2 mt-6">
              <Star className="w-4 h-4" />
              Client Success Stories
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            Voices of Trust from
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mt-1">
              Industry Leaders
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Discover why 500+ companies across 16+ industries have chosen Nisha Roadways as their trusted logistics partner. From Fortune 500 giants to innovative startups, hear directly from the leaders who've experienced our commitment to excellence.
          </p>

          {/* Testimonial Impact Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-700 font-medium">Average Rating</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Client Retention</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Avg Partnership Years</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Success Stories</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Link href="#testimonials" className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Read Testimonials
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#case-studies" className="w-full sm:w-auto px-10 py-5 bg-white/30 backdrop-blur-md border border-white/40 text-gray-700 rounded-2xl font-semibold text-lg hover:bg-white/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <FileText className="w-5 h-5" />
              Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section id="testimonials" className="py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100/80 backdrop-blur-sm text-blue-700 rounded-full font-semibold text-sm">
              <Filter className="w-4 h-4" />
              Filter by Industry
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white/70 text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Partners
              <span className="block text-blue-600 mt-2">Say About Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
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
                
                <div className="bg-blue-50 rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                  <p className="text-blue-700 font-medium">{testimonial.keyMetrics}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 lg:py-32 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-green-100/80 backdrop-blur-sm text-green-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 shadow-lg">
              <Trophy className="w-4 h-4" />
              Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transforming Industries
              <span className="block text-green-600 mt-2">Through Innovation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white">
                    {study.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{study.title}</h3>
                    <p className="text-green-600 font-semibold">{study.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{study.timeline}</span>
                  <button className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Wall */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Trusted by Industry
              <span className="block text-blue-300 mt-2">Leaders Nationwide</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Tata Steel', 'Maersk Line', 'Sun Pharma', 'L&T Construction', 
              'BHEL', 'Reliance Industries', 'Mahindra Group', 'Bajaj Auto',
              'Asian Paints', 'UltraTech Cement', 'Godrej Group', 'ITC Limited'
            ].map((company, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-white">{company}</div>
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ companies who've transformed their logistics operations through our partnership approach. Experience the difference that four decades of excellence makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Start Your Partnership
            </Link>
            <Link href="/partners" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View All Partners
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Submission Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600">
              Are you a current client? We'd love to hear about your experience with Nisha Roadways.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Position</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors">
                    <option>Select Industry</option>
                    {industries.slice(1).map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Experience</label>
                <textarea rows={6} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors" placeholder="Tell us about your experience with Nisha Roadways..."></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float.delay-1000 {
    animation-delay: 1s;
  }

  .animate-float.delay-2000 {
    animation-delay: 2s;
  }
`