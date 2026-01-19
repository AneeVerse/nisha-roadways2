'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Award, Target, Briefcase } from 'lucide-react';
import Footer from '@/components/Footer';
import AboutTeam from '@/components/about/AboutTeam';
import TeamStructure from '@/components/team/TeamStructure';
import TeamTraining from '@/components/team/TeamTraining';
import TeamCulture from '@/components/team/TeamCulture';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Original Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 ">
        {/* Background Pattern */}
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
            43 years in business. 96,000 trips per year. That doesn't happen by accident—it happens because of the people behind it.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <Link href="#leadership" className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              Meet Our Leadership
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Section - Still menggunakan component AboutTeam yang sudah perfect tadi */}
      <div id="leadership">
        <AboutTeam />
      </div>

      {/* Modern Department Structure */}
      <TeamStructure />

      {/* Weekly Training Ecosystem */}
      <TeamTraining />

      {/* Deep Dive into Culture */}
      <TeamCulture />

      {/* Footer */}
      <Footer />
    </div>
  );
}
