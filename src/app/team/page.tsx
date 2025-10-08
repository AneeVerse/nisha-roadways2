'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Users, Award, Target, Shield, Heart, Star, MapPin, Mail, Phone, Calendar, CheckCircle, TrendingUp, Globe, Clock, Briefcase, GraduationCap, Zap, BarChart3, BookOpen, Trophy, Circle, FileText } from 'lucide-react'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-10">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-indigo-50/80"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Improved Floating Elements */}
        <div className="absolute top-24 left-8 lg:left-20 w-16 h-16 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center animate-float">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <div className="absolute top-32 right-8 lg:right-20 w-20 h-20 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center animate-float delay-1000">
          <Award className="w-10 h-10 text-purple-600" />
        </div>
        <div className="absolute bottom-40 left-8 lg:left-32 w-14 h-14 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center animate-float delay-2000">
          <Target className="w-7 h-7 text-green-600" />
        </div>
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/30 backdrop-blur-md rounded-3xl border border-white/40 shadow-xl flex items-center justify-center animate-float delay-3000">
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
            The People Behind
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mt-1">
              India's Logistics Success
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-16 max-w-5xl mx-auto leading-relaxed font-medium">
            Meet the visionary leaders, dedicated professionals, and passionate team members who drive excellence in every mile we cover across India's logistics landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Link href="#leadership" className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Meet Our Leadership
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#opportunities" className="w-full sm:w-auto px-10 py-5 bg-white/30 backdrop-blur-md border border-white/40 text-gray-700 rounded-2xl font-semibold text-lg hover:bg-white/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <Briefcase className="w-5 h-5" />
              Join Our Team
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
              Visionary Leadership,
              <span className="block text-blue-600 mt-2">Proven Results</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
              Our leadership team combines decades of industry expertise with innovative thinking, driving Nisha Roadways to new heights of excellence in logistics and transportation across India.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Nandkishor Agarwal */}
            <div className="group h-full">
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-white/80 transition-all duration-500 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
                  <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white text-2xl font-bold shadow-xl flex-shrink-0">
                    NA
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3">Nandkishor Agarwal</h3>
                    <p className="text-lg lg:text-xl text-blue-600 font-semibold mb-2">Chairman & Managing Director</p>
                    <p className="text-gray-600 font-medium">Visionary Leader & Industry Pioneer</p>
                  </div>
                </div>
                
                <div className="space-y-8 flex-grow">
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Award className="w-4 h-4 text-blue-600" />
                      </div>
                      Key Achievements
                    </h4>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">Founded Nisha Roadways in 1982 with a vision to revolutionize logistics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">Expanded operations to 30+ branches across India</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">Pioneer in container transportation and multimodal logistics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 lg:p-8 border border-blue-200/50">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-200 rounded-xl flex items-center justify-center">
                        <Target className="w-4 h-4 text-blue-700" />
                      </div>
                      Leadership Philosophy
                    </h4>
                    <blockquote className="text-gray-700 italic leading-relaxed text-lg">
                      "Success in logistics is not just about moving goods from point A to point B. It's about building relationships, ensuring reliability, and creating value for every stakeholder in the supply chain."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Navin Agarwal */}
            <div className="group h-full">
              <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/80 transition-all duration-500 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-10">
                  <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center text-white text-2xl font-bold shadow-xl flex-shrink-0">
                    NA
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3">Navin Agarwal</h3>
                    <p className="text-lg lg:text-xl text-purple-600 font-semibold mb-2">Executive Director</p>
                    <p className="text-gray-600 font-medium">Strategic Operations & Growth Leader</p>
                  </div>
                </div>
                
                <div className="space-y-8 flex-grow">
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-xl flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                      </div>
                      Key Achievements
                    </h4>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">Spearheaded digital transformation and technology integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">Developed strategic partnerships across 16+ industry sectors</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">Led operational excellence initiatives and safety protocols</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 lg:p-8 border border-purple-200/50">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-200 rounded-xl flex items-center justify-center">
                        <Zap className="w-4 h-4 text-purple-700" />
                      </div>
                      Leadership Philosophy
                    </h4>
                    <blockquote className="text-gray-700 italic leading-relaxed text-lg">
                      "Innovation and tradition must work hand in hand. While we honor our legacy, we continuously evolve to meet the changing needs of modern logistics and our valued clients."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-100/80 to-purple-100/80 backdrop-blur-sm text-blue-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 shadow-lg">
              <Users className="w-4 h-4" />
              Advisory Board
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Strategic Guidance &
              <span className="block text-purple-600 mt-2">Industry Expertise</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Our distinguished advisory board brings together seasoned professionals with deep industry knowledge, providing strategic direction and invaluable insights for our continued growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {/* Rajkumar Agarwal */}
            <div className="group h-full">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/40 hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-white/90 transition-all duration-500 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 shadow-xl">
                    RA
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Rajkumar Agarwal</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">Senior Advisor</p>
                  <p className="text-gray-600 font-medium">Strategic Planning & Operations</p>
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-200/50">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-200 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-blue-700" />
                      </div>
                      Expertise
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">Strategic business planning and market expansion</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">Operational excellence and process optimization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">Industry partnerships and stakeholder relations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sumit Singhania */}
            <div className="group h-full">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/40 hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/90 transition-all duration-500 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 shadow-xl">
                    SS
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Sumit Singhania</h3>
                  <p className="text-lg text-purple-600 font-semibold mb-2">Technology Advisor</p>
                  <p className="text-gray-600 font-medium">Digital Innovation & Tech Strategy</p>
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 border border-purple-200/50">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-200 rounded-xl flex items-center justify-center">
                        <Zap className="w-4 h-4 text-purple-700" />
                      </div>
                      Expertise
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">Digital transformation and automation solutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">Supply chain technology integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">Data analytics and performance optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Arun Kumar Pandey */}
            <div className="group h-full md:col-span-2 xl:col-span-1">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/40 hover:shadow-2xl hover:shadow-green-500/10 hover:bg-white/90 transition-all duration-500 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 shadow-xl">
                    AP
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Arun Kumar Pandey</h3>
                  <p className="text-lg text-green-600 font-semibold mb-2">Compliance Advisor</p>
                  <p className="text-gray-600 font-medium">Regulatory Affairs & Risk Management</p>
                </div>
                
                <div className="space-y-6 flex-grow">
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-200/50">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-200 rounded-xl flex items-center justify-center">
                        <Shield className="w-4 h-4 text-green-700" />
                      </div>
                      Expertise
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">Regulatory compliance and government relations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">Risk assessment and mitigation strategies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">Legal framework and policy development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-cyan-50/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-100/80 to-cyan-100/80 backdrop-blur-sm text-indigo-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-6">
              <Heart className="w-4 h-4" />
              Our Team Culture
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Five Pillars of
              <span className="block text-indigo-600 mt-2">Excellence</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Our culture is built on five fundamental pillars that guide every decision, action, and interaction within the Nisha Roadways family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
            {/* Integrity */}
            <div className="group h-full">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/40 hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-white/90 transition-all duration-500 h-full flex flex-col text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">Unwavering commitment to ethical practices and transparency in all operations</p>
              </div>
            </div>

            {/* Teamwork */}
            <div className="group h-full">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/40 hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white/90 transition-all duration-500 h-full flex flex-col text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Teamwork</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">Collaborative spirit that drives collective success and shared achievements</p>
              </div>
            </div>

            {/* Excellence */}
            <div className="group h-full">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/40 hover:shadow-2xl hover:shadow-green-500/10 hover:bg-white/90 transition-all duration-500 h-full flex flex-col text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">Continuous pursuit of the highest standards in service delivery and quality</p>
              </div>
            </div>

            {/* Customer Focus */}
            <div className="group h-full">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/40 hover:shadow-2xl hover:shadow-red-500/10 hover:bg-white/90 transition-all duration-500 h-full flex flex-col text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Customer Focus</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">Dedicated commitment to exceeding client expectations and building lasting relationships</p>
              </div>
            </div>

            {/* Innovation */}
            <div className="group h-full md:col-span-2 lg:col-span-3 xl:col-span-1">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/40 hover:shadow-2xl hover:shadow-orange-500/10 hover:bg-white/90 transition-all duration-500 h-full flex flex-col text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">Embracing new technologies and methodologies to stay ahead in the logistics industry</p>
              </div>
            </div>
          </div>

          {/* Culture Statement */}
          <div className="mt-16 lg:mt-20">
            <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-6">
                  More Than Just a Workplace
                </h3>
                <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                  At Nisha Roadways, we believe in creating an environment where every team member feels valued, empowered, and inspired to contribute their best. Our culture fosters growth, celebrates diversity, and builds lasting relationships that extend beyond the workplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section id="opportunities" className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 backdrop-blur-sm text-indigo-300 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 border border-indigo-400/30">
              <Briefcase className="w-4 h-4" />
              Current Opportunities
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Join Our Growing
              <span className="block text-indigo-400 mt-2">Team Today</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              We're actively seeking passionate professionals to join our mission of revolutionizing logistics across India.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Senior Executive Position */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl">
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">Senior Executive Position</h3>
                        <p className="text-indigo-300 font-medium">Full-time • Multiple Locations</p>
                      </div>
                    </div>
                    <div className="sm:ml-auto">
                      <span className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold border border-green-400/30">
                        <Circle className="w-2 h-2 mr-2 fill-current" />
                        Open Now
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">Independently handling all correspondence (phone, written, and emails)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">Well-versed in client interaction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">Excellent command over English language (written and spoken)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">Good knowledge of container transportation and logistics industry</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">Minimum 5 years experience handling similar profile</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Location & Benefits</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">Head Office, CBD Belapur, Navi Mumbai</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">Competitive salary package</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">Growth opportunities across India</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-indigo-400 mt-1 flex-shrink-0" />
                          <span className="text-sm">Comprehensive training programs</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:hr@nisharoadways.com" className="flex-1 sm:flex-none bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Apply Now
                    </a>
                    <div className="flex-1 sm:flex-none border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2">
                      <span className="text-sm">Send CV with photo to hr@nisharoadways.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="mt-12 lg:mt-16">
              <div className="text-center mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Simple Application Process</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">Join our team in just three easy steps</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">1. Submit Application</h4>
                  <p className="text-gray-300 leading-relaxed">Send us your resume and cover letter highlighting your experience and passion for logistics.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">2. Interview Process</h4>
                  <p className="text-gray-300 leading-relaxed">Participate in our comprehensive interview process designed to understand your skills and fit.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">3. Welcome Aboard</h4>
                  <p className="text-gray-300 leading-relaxed">Join our family and begin your journey with comprehensive onboarding and training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-indigo-50/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-100/80 to-indigo-100/80 backdrop-blur-sm text-blue-700 rounded-full font-semibold text-sm tracking-wide uppercase mb-8 shadow-lg">
              <Users className="w-4 h-4" />
              Employee Testimonials
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Voices from Our
              <span className="block text-blue-600 mt-2">Team Family</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Hear directly from our team members about their experiences, growth, and journey with Nisha Roadways.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Testimonial 1 */}
            <div className="group h-full">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:bg-white transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    R
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Rajesh Kumar</h4>
                    <p className="text-blue-600 font-semibold">Senior Operations Manager</p>
                    <p className="text-gray-500 text-sm">5 years with Nisha Roadways</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 leading-relaxed flex-grow text-lg italic mb-6">
                  "Working at Nisha Roadways has been transformative. The company's commitment to employee growth and the supportive work environment have helped me advance my career significantly. The leadership team truly cares about each team member's success."
                </blockquote>

                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Verified Employee</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group h-full">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:bg-white transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    P
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Priya Sharma</h4>
                    <p className="text-indigo-600 font-semibold">Customer Relations Executive</p>
                    <p className="text-gray-500 text-sm">3 years with Nisha Roadways</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 leading-relaxed flex-grow text-lg italic mb-6">
                  "The work-life balance at Nisha Roadways is exceptional. The company values its employees and provides excellent opportunities for professional development. I've grown both personally and professionally during my time here."
                </blockquote>

                <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Verified Employee</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group h-full">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:bg-white transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    A
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Amit Patel</h4>
                    <p className="text-purple-600 font-semibold">Fleet Coordinator</p>
                    <p className="text-gray-500 text-sm">4 years with Nisha Roadways</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 leading-relaxed flex-grow text-lg italic mb-6">
                  "Nisha Roadways is more than just a workplace - it's a family. The collaborative culture, continuous learning opportunities, and the company's vision for innovation make it an ideal place to build a career in logistics."
                </blockquote>

                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Verified Employee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Testimonials Summary */}
          <div className="mt-16 lg:mt-20">
            <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/50 shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">4.8/5</div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 font-medium">Employee Satisfaction</p>
                  </div>
                  <div className="w-px h-16 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-indigo-600 mb-2">95%</div>
                    <p className="text-gray-600 font-medium">Would Recommend</p>
                  </div>
                  <div className="w-px h-16 bg-gray-300"></div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">3.2 Years</div>
                    <p className="text-gray-600 font-medium">Average Tenure</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Based on internal surveys and feedback from over 500+ team members across all our locations in India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Statistics */}
       <section className="py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
         <div className="absolute inset-0 bg-black/10"></div>
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 lg:mb-20">
             <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-sm tracking-wide uppercase mb-8 border border-white/30">
               <BarChart3 className="w-4 h-4" />
               Numbers That Tell Our Story
             </div>
             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
               Team Statistics &
               <span className="block text-cyan-300 mt-2">Achievements</span>
             </h2>
             <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
               Our numbers reflect our commitment to excellence, safety, and continuous growth in the logistics industry.
             </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-8">
             {[
               { 
                 number: "500+", 
                 label: "Team Members", 
                 sublabel: "Across 30+ branches",
                 icon: Users,
                 color: "from-blue-400 to-blue-500"
               },
               { 
                 number: "25+", 
                 label: "Years Experience", 
                 sublabel: "Average leadership tenure",
                 icon: Trophy,
                 color: "from-purple-400 to-purple-500"
               },
               { 
                 number: "100+", 
                 label: "Certified Drivers", 
                 sublabel: "Specialized cargo experts",
                 icon: Shield,
                 color: "from-green-400 to-green-500"
               },
               { 
                 number: "16+", 
                 label: "Industry Sectors", 
                 sublabel: "Specialized coverage",
                 icon: Briefcase,
                 color: "from-orange-400 to-orange-500"
               },
               { 
                 number: "24/7", 
                 label: "Operations", 
                 sublabel: "Round-the-clock service",
                 icon: Clock,
                 color: "from-cyan-400 to-cyan-500"
               },
               { 
                 number: "Zero", 
                 label: "Major Incidents", 
                 sublabel: "Outstanding safety record",
                 icon: Award,
                 color: "from-emerald-400 to-emerald-500"
               }
             ].map((stat, index) => {
               const IconComponent = stat.icon;
               return (
                 <div key={index} className="group">
                   <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-white/20 hover:bg-white/25 hover:scale-105 transition-all duration-500 shadow-xl h-full flex flex-col text-center">
                     <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                       <IconComponent className="w-8 h-8" />
                     </div>
                     <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 leading-none">{stat.number}</div>
                     <div className="text-lg lg:text-xl font-semibold text-white mb-2">{stat.label}</div>
                     <div className="text-sm text-white/80 leading-relaxed flex-grow">{stat.sublabel}</div>
                   </div>
                 </div>
               );
             })}
           </div>

           {/* Additional Statistics */}
           <div className="mt-16 lg:mt-20">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
               {[
                 { 
                   number: "98.5%", 
                   label: "On-Time Delivery", 
                   description: "Consistent performance across all routes",
                   icon: CheckCircle
                 },
                 { 
                   number: "4.9/5", 
                   label: "Client Satisfaction", 
                   description: "Based on 1000+ client reviews",
                   icon: Star
                 },
                 { 
                   number: "15+", 
                   label: "Training Programs", 
                   description: "Continuous skill development",
                   icon: BookOpen
                 },
                 { 
                   number: "30+", 
                   label: "Branch Network", 
                   description: "Pan-India presence",
                   icon: Globe
                 }
               ].map((stat, index) => {
                 const IconComponent = stat.icon;
                 return (
                   <div key={index} className="group">
                     <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center h-full flex flex-col">
                       <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                         <IconComponent className="w-6 h-6" />
                       </div>
                       <div className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                       <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                       <div className="text-sm text-white/70 leading-relaxed flex-grow">{stat.description}</div>
                     </div>
                   </div>
                 );
               })}
             </div>
           </div>

           {/* Call to Action */}
           <div className="mt-16 lg:mt-20 text-center">
             <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
               <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6">
                 Ready to Be Part of These Numbers?
               </h3>
               <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                 Join our growing team and contribute to India's logistics success story. Your expertise and dedication can help us achieve even greater milestones.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                 <a href="mailto:hr@nisharoadways.com" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-white/90 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl">
                   <Mail className="w-5 h-5" />
                   Join Our Team
                 </a>
                 <Link href="#opportunities" className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-3">
                   <ArrowRight className="w-5 h-5" />
                   View Openings
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-16 border border-white/20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Your Career Journey
              <span className="block text-blue-600">Starts Here</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              At Nisha Roadways, earnestly pursuing your career goals helps achieve greater heights and success. Empowered by our think-tank at NRPL, we have demonstrated a quantum leap in advancement of our workforce by aligning methodologies to their growth and accomplishment of their goals, both personal and professional.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Nisha Roadways:</h3>
                <ul className="space-y-4 text-left">
                  {[
                    "Be part of India's logistics success story",
                    "Work with industry-leading professionals",
                    "Continuous learning and development opportunities",
                    "Competitive compensation and benefits",
                    "Pan-India career mobility options",
                    "Recognition and growth-based culture"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Ready to Drive Your Career Forward?</h3>
                <div className="space-y-6">
                  <a href="mailto:hr@nisharoadways.com" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                    Send Your CV
                  </a>
                  <p className="text-gray-600">
                    Send your CV to hr@nisharoadways.com and become part of the Nisha Parivaar.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/careers" className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
              Explore Current Openings
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Add custom animations
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