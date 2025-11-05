'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Award, Target, Shield, Heart, CheckCircle, Briefcase, Zap, FileText, BookOpen } from 'lucide-react'
import Footer from '@/components/Footer'
import TeamProfileCard from '@/components/TeamProfileCard'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 ">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/80"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Improved Floating Elements */}
        <div className="absolute top-24 left-8 lg:left-20 w-16 h-16 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl hidden sm:flex items-center justify-center animate-float">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <div className="absolute top-32 right-8 lg:right-20 w-20 h-20 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl hidden sm:flex items-center justify-center animate-float delay-1000">
          <Award className="w-10 h-10 text-purple-600" />
        </div>
        <div className="absolute bottom-40 left-8 lg:left-32 w-14 h-14 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl hidden sm:flex items-center justify-center animate-float delay-2000">
          <Target className="w-7 h-7 text-green-600" />
        </div>
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl hidden sm:flex items-center justify-center animate-float delay-3000">
          <Briefcase className="w-6 h-6 text-orange-600" />
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-lg text-blue-700 font-semibold text-sm tracking-wide uppercase mb-2">
              <Users className="w-4 h-4" />
              Meet Our Team
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-12 leading-tight tracking-tight">
            The People Moving India
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed font-medium">
            43 years in business. 96,000 trips per year. That doesn&apos;t happen by accident—it happens because of the people behind it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Link href="#leadership" className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Meet Our Leadership
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Introduction */}
      <section id="leadership" className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-100/80 backdrop-blur-sm text-blue-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 shadow-lg">
              <Award className="w-4 h-4" />
              Leadership Excellence
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-10 leading-tight">
              Our Leadership (DREAM TEAM)
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamProfileCard
              name="NK AGARWAL"
              role="Founder &amp; Chairman"
              imageSrc="/images/dream-team/imgi_2_nka.jpg"
              description="Born and brought up in Calcutta, Mr. Nandkishor Agarwal moved to Mumbai in 1975. Having completed his education in Calcutta, he got a job in a small transport company as Supervisor as soon as he arrived in Mumbai. He subsequently started out on his own and founded Nisha Roadways Pvt. Ltd. in 1982. The company has grown from strength to strength over the years. His rich experience of 43 years in the transport sector has earned him tremendous goodwill and respect amongst his clients, competitors and industry biggies."
              accentGradient="from-blue-600 to-indigo-700"
            />
            <TeamProfileCard
              name="NAVIN AGARWAL"
              role="CEO"
              imageSrc="/images/dream-team/imgi_3_navina.jpg"
              description="After completing his B.Com from Mumbai University, Navin acquired an MBA from K. J. Somaiya Institute of Management Studies, Mumbai, and subsequently joined the business in the year 2000. Bringing innovative ideas, he worked to boost the business from just four to 30+ branches, thus widening the network pan-India. Making calculated strategies work for him, he diversified into other segments like tank division, LCL, FCL services, warehousing and packaging etc. Today under his astute supervision, NRPL is steadily growing with their own fleet on roads."
              accentGradient="from-green-600 to-emerald-700"
            />
            <TeamProfileCard
              name="RAJKUMAR AGARWAL"
              role="Mentor"
              imageSrc="/images/dream-team/imgi_4_rajkumara.jpg"
              description="Mr. Raj Kumar Agarwal, a practicing lawyer in the field of Income tax, left his practice to pursue his dream in the field of Real estate in the year 1990. Currently the founder & Managing Director of Kolkata's Real Estate company 'AMBEY GROUP', engaged in construction and land development for both residential as well as commercial spaces since more than two decades."
              accentGradient="from-purple-600 to-violet-700"
            />
            <TeamProfileCard
              name="SUMIT SINGHANIA"
              role="C.A (Consultant)"
              imageSrc="/images/dream-team/imgi_5_sumits.jpg"
              description="He is a chartered accountant with over 18 years of working experience in the field of audit, finance, real-estate and taxation. He has extensive knowledge of the Indian real-estate sector and has passion for developing innovative products for the real-estate sector. He carries with him the experience of working with the big 4 CA Firms and has executed several projects in the country as the leader. He is presently serving as a Consultant in BAS &amp; CO. LLP and is also acting as a CEO &amp; Founder of Distress Bricks Private Limited."
              accentGradient="from-orange-600 to-red-700"
            />
            <TeamProfileCard
              name="ARUN KUMAR PANDEY"
              role="C.A (Consultant)"
              imageSrc="/images/dream-team/imgi_6_arunkumar.jpg"
              description="Arun Pandey comes with a rock solid experience of 30 years as a Chartered Accountant. Having worked with 15 companies which are in the big league, today he runs his own company 'A Pandey &amp; Associates'. Immensely benefitting his collective experience working has given him in-depth proficiency about the working of this industry. Today he is amongst the core group of NRPL."
              accentGradient="from-teal-600 to-cyan-700"
            />
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 lg:py-32 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-100/80 backdrop-blur-sm text-blue-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 shadow-lg">
              <Users className="w-4 h-4" />
              Our Team Structure
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-10 leading-tight">
              Departments That Make It Happen
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operations</h3>
              <p className="text-gray-600 leading-relaxed">
                Planning routes, assigning vehicles, tracking shipments, solving issues in real-time.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Your point of contact for quotes, bookings, updates, and problem resolution.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety &amp; Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Ensuring all shipments meet regulatory requirements and safety standards.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Building DICE platform, maintaining GPS systems, managing data.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fleet Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Maintaining our owned fleet and coordinating with our leased vehicle network.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600 leading-relaxed">
                Handling paperwork, customs documents, permits, and billing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Through Aamita */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 shadow-lg">
              <BookOpen className="w-4 h-4" />
              Training Through Aamita
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Continuous Learning & Growth
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
              Every week, industry experts share experiences with our team. Recent topics included:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Managing ODC movements during monsoons',
              'Fast customs clearance techniques',
              'Handling reefer container emergencies',
              'Client relationship management'
            ].map((topic, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{topic}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700 font-semibold">
              Better training means better service for you.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50/60 to-cyan-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-100/80 to-cyan-100/80 backdrop-blur-sm text-indigo-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-6">
              <Heart className="w-4 h-4" />
              Our Culture
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Problem Solvers, Not Problem Watchers
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-white/40 shadow-xl">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                We&apos;re not just moving cargo we&apos;re solving problems. Sometimes that means finding a vehicle at 11 PM for an urgent shipment. Sometimes it means getting 19 overweight vehicles through border checkpoints.
              </p>
              <p className="text-2xl font-bold text-gray-900 text-center">
                Our team doesn&apos;t wait for perfect situations. They figure it out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

