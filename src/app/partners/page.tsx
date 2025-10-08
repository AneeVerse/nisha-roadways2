'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Award, Target, Shield, Heart, Star, MapPin, Mail, Phone, Calendar, CheckCircle, TrendingUp, Globe, Clock, Briefcase, GraduationCap, Zap, BarChart3, BookOpen, Trophy, Circle, FileText, Factory, Truck, Building2, Wrench, Cpu, Plane, Fuel, ShoppingCart, HardHat, Beaker, Package } from 'lucide-react'

export default function PartnersPage() {
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
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <div className="absolute top-32 right-8 lg:right-20 w-20 h-20 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center animate-float delay-1000">
          <Award className="w-10 h-10 text-purple-600" />
        </div>
        <div className="absolute bottom-40 left-8 lg:left-32 w-14 h-14 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center animate-float delay-2000">
          <Target className="w-7 h-7 text-green-600" />
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-lg text-blue-700 font-semibold text-sm tracking-wide uppercase mb-2 mt-6">
              <Building2 className="w-4 h-4" />
              Trusted Partners
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            Trusted Partners Across
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mt-1">
              16+ Industries
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            For over four decades, we've been the logistics backbone for India's leading companies. From Fortune 500 giants to innovative startups, discover the industry leaders who trust Nisha Roadways with their most critical shipments.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Corporate Partners</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">16+</div>
              <div className="text-gray-700 font-medium">Industry Sectors</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">1,500+</div>
              <div className="text-gray-700 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">43</div>
              <div className="text-gray-700 font-medium">Years of Trust Building</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Link href="#industries" className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Explore Industries
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/testimonials" className="w-full sm:w-auto px-10 py-5 bg-white/30 backdrop-blur-md border border-white/40 text-gray-700 rounded-2xl font-semibold text-lg hover:bg-white/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <Star className="w-5 h-5" />
              Read Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Leadership Showcase */}
      <section id="industries" className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-100/80 backdrop-blur-sm text-blue-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 shadow-lg">
              <Trophy className="w-4 h-4" />
              Industry Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-10 leading-tight">
              Industry Leaders Who
              <span className="block text-blue-600 mt-2">Choose Excellence</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium mb-8">
              When India's most demanding companies need logistics excellence, they choose Nisha Roadways. Our client portfolio reads like a who's who of Indian industry—from shipping giants who trust us with their containers to pharmaceutical leaders who rely on our precision, and from steel manufacturers who depend on our specialized handling to FMCG brands who count on our nationwide reach.
            </p>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our collaborations aren't just business relationships—they're partnerships built on four decades of reliability, innovation, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Major Industry Sectors */}
      <section className="py-20 lg:py-32 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powering Success Across
              <span className="block text-blue-600 mt-2">Every Major Industry</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Chemicals Sector */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Beaker className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Chemicals Sector</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
                  <p className="text-gray-600">Hazardous and non-hazardous chemical transportation requiring absolute safety compliance and zero-incident track record.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Expertise:</h4>
                  <p className="text-gray-600">ADR-certified drivers, safety-equipped vehicles, and emergency response protocols that meet international standards.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Partnerships:</h4>
                  <p className="text-gray-600">Leading chemical manufacturers and pharmaceutical companies who trust us with their most sensitive cargo.</p>
                </div>
              </div>
            </div>

            {/* Shipping & Container Logistics */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Shipping & Container Logistics</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">The Challenge:</h4>
                  <p className="text-gray-600">Pioneer-level expertise in empty container movement and full-service import/export container handling.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Innovation:</h4>
                  <p className="text-gray-600">First company in India to specialize in empty container transportation by road, revolutionizing the industry approach.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Major Collaborations:</h4>
                  <p className="text-gray-600">Global shipping lines, container leasing companies, and freight forwarders who rely on our port-to-door expertise.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue with more industry sectors in a grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Pharmaceutical Industry */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Pharmaceutical</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Temperature-sensitive cargo requiring precision handling, compliance documentation, and damage-free delivery.</p>
              <p className="text-green-700 font-medium text-sm">Climate-controlled transportation & certified protocols</p>
            </div>

            {/* Textiles & Fashion */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Textiles & Fashion</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Fashion-forward logistics for time-sensitive deliveries and seasonal inventory management.</p>
              <p className="text-purple-700 font-medium text-sm">Flexible scheduling & nationwide distribution</p>
            </div>

            {/* FMCG & Consumer Goods */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">FMCG & Consumer</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">High-volume distribution requiring consistent quality and nationwide reach.</p>
              <p className="text-orange-700 font-medium text-sm">30+ branches ensuring last-mile connectivity</p>
            </div>

            {/* Electronics & White Goods */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Electronics</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">High-value cargo protection with specialized handling and security protocols.</p>
              <p className="text-blue-700 font-medium text-sm">Escort services & advanced tracking</p>
            </div>

            {/* Engineering & Manufacturing */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Engineering</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Heavy machinery and industrial equipment transportation requiring custom solutions.</p>
              <p className="text-gray-700 font-medium text-sm">Project cargo expertise & route surveys</p>
            </div>

            {/* Steel Industry */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Steel Industry</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Heavy steel products including coils, plates, and structural materials requiring specialized securing.</p>
              <p className="text-yellow-700 font-medium text-sm">Advanced lashing & load optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Success Metrics */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Numbers That Speak
              <span className="block text-blue-300 mt-2">Louder Than Words</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-blue-300 mb-4">99.8%</div>
              <div className="text-xl font-semibold mb-2">On-Time Delivery Rate</div>
              <div className="text-blue-200">Consistency that industry leaders depend on</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-green-300 mb-4">Zero</div>
              <div className="text-xl font-semibold mb-2">Major Damage Claims</div>
              <div className="text-green-200">Safety record that earns executive trust</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-purple-300 mb-4">24/7</div>
              <div className="text-xl font-semibold mb-2">Operational Support</div>
              <div className="text-purple-200">Availability that matches business demands</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-yellow-300 mb-4">15+</div>
              <div className="text-xl font-semibold mb-2">Year Average Partnership</div>
              <div className="text-yellow-200">Relationships built on proven results</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-orange-300 mb-4">Pan-India</div>
              <div className="text-xl font-semibold mb-2">Network Coverage</div>
              <div className="text-orange-200">Reach that connects every destination</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-4xl font-bold text-pink-300 mb-4">16+</div>
              <div className="text-xl font-semibold mb-2">Industry Certifications</div>
              <div className="text-pink-200">Compliance meeting highest standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Industry Leaders Choose Us */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Partnership
              <span className="block text-blue-600 mt-2">Advantage</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">Four decades of consistent excellence earning trust from India's most demanding companies across every major industry sector.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">Specialized knowledge and customized solutions for the unique challenges of each industry we serve.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation Leadership</h3>
              <p className="text-gray-600">Pioneering approaches like empty container transportation by road that set industry benchmarks.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety Excellence</h3>
              <p className="text-gray-600">Zero-tolerance policy for substandard deliveries with international-standard safety measures.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nationwide Reach</h3>
              <p className="text-gray-600">30+ branches ensuring comprehensive coverage from major metros to remote industrial locations.</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">
              <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Integration</h3>
              <p className="text-gray-600">Real-time tracking, digital documentation, and modern fleet management systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover how 500+ companies have transformed their logistics operations through our partnership approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/testimonials" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Read Success Stories
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Consultation
            </Link>
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