'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Award, Target, Building2, Package, Ship, Train, Warehouse, ShieldCheck, Zap } from 'lucide-react'
import Footer from '@/components/Footer'
import CtaBanner from '@/components/CtaBanner'

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/80"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-24 left-8 lg:left-20 w-16 h-16 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl hidden sm:flex items-center justify-center animate-float">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <div className="absolute top-32 right-8 lg:right-20 w-20 h-20 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl hidden sm:flex items-center justify-center animate-float delay-1000">
          <Award className="w-10 h-10 text-purple-600" />
        </div>
        <div className="absolute bottom-40 left-8 lg:left-32 w-14 h-14 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl hidden sm:flex items-center justify-center animate-float delay-2000">
          <Target className="w-7 h-7 text-green-600" />
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-lg text-blue-700 font-semibold text-sm tracking-wide uppercase mt-18">
              <Building2 className="w-4 h-4" />
              Trusted Partners
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            Our Network Partners
          </h1>
          
          <p className="text-base sm:text-lg lg:text-lg text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
            We work with shipping lines, rail operators, coastal shipping companies, warehousing partners, and insurance providers to give you complete logistics solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Link href="#partners" className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Explore Partners
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section id="partners" className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-100/80 backdrop-blur-sm text-blue-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 shadow-lg">
              <Award className="w-4 h-4" />
              Partner Network
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10 leading-tight">
              Complete Logistics Solutions Through Partnership
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Shipping Line Partners */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Ship className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shipping Line Partners</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We&apos;re approved transporters for major shipping lines operating in India. This means faster container releases, better coordination, and priority support.
              </p>
              <p className="text-sm text-gray-500 italic">
                [Include logos and names of major shipping lines you work with]
              </p>
            </div>

            {/* Rail Partners */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Train className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rail Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                We partner with rail operators across India to provide multimodal transport solutions. This gives you the flexibility to choose rail when it makes sense for your cargo and budget.
              </p>
            </div>

            {/* Coastal Shipping Partners */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Ship className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Coastal Shipping Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                Our coastal shipping network connects 10 major Indian ports through partnerships with coastal vessel operators.
              </p>
            </div>

            {/* Warehousing Partners */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Warehouse className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Warehousing Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                Pan-India warehousing network through our owned facilities and partner warehouses. This gives you storage options in every major city and port.
              </p>
            </div>

            {/* Insurance Partners */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Insurance Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                We work with multiple insurance providers to offer you options based on cargo value, type, and route.
              </p>
            </div>

            {/* Technology Partners */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Partners</h3>
              <p className="text-gray-600 leading-relaxed">
                Building DICE platform with technology partners specialized in logistics SaaS, GPS tracking, and AI integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partners Matter */}
      <section className="py-20 lg:py-32 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 shadow-lg">
              <Target className="w-4 h-4" />
              Why Partners Matter
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10 leading-tight">
              One Point of Contact. Complete Solution.
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                You don&apos;t need to call separate vendors for rail, coastal, warehouse, and insurance. We coordinate everything through our partner network.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Integrated Partnership Approach</h3>
              <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                When you work with Nisha Roadways, you get access to our entire network of trusted partners. We handle the coordination, you get seamless logistics solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </div>
  )
}

