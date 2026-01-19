"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { History, Globe, Play, Sparkles, CheckCircle2 } from 'lucide-react';

const FeaturesSection = () => {
  const handlePlayVideo = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  const features = [
    {
      title: "43 Years of Expertise",
      description: "Founded in 1982, we've moved over 2.3 million shipments with unmatched precision and care.",
      icon: History,
      color: "blue"
    },
    {
      title: "Pan-India Network",
      description: "20+ strategic offices connecting ports, ICDs, and factories across the entire subcontinent.",
      icon: Globe,
      color: "indigo"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-50 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                  Our Legacy & Reach
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                Decades of Excellence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Built on Foundation of Trust.
                </span>
              </h2>

              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Since 1982, Nisha Roadways has moved over 2.3 million shipments across India. We're not just moving cargo—we're orchestrating supply chains that empower businesses and drive national growth.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 bg-slate-50 hover:bg-white rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                  <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center overflow-hidden">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">300+ Dedicated Clients</p>
                <p className="text-xs text-slate-500 font-medium">Across all major industry sectors</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Interactive Card */}
            <div className="relative group perspective-1000">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white group-hover:shadow-blue-900/20 transition-all duration-500">
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[6/7]">
                  <Image
                    src="/images/about-us/about.png"
                    alt="The Legacy of Nisha Roadways"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Premium Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handlePlayVideo}
                      className="group/play relative w-24 h-24 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md text-blue-600 shadow-2xl transition-all duration-500 hover:bg-blue-600 hover:scale-110"
                    >
                      <Play className="w-10 h-10 ml-1.5 fill-current transition-colors duration-500 group-hover/play:text-white" />

                      {/* Animated Pulse Ring */}
                      <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-20 group-hover/play:hidden"></span>
                      <span className="absolute -inset-4 rounded-full border border-white/30 animate-pulse transition-opacity duration-500 opacity-0 group-hover/play:opacity-100"></span>
                    </button>
                  </div>

                  {/* Bottom Text Label */}
                  <div className="absolute bottom-10 left-10 right-10 z-10">
                    <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                      <p className="text-white text-lg font-bold">Watch Our Story</p>
                      <p className="text-white/80 text-sm font-medium">From 80 Square Feet to Pan-India Operations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl -rotate-6 -z-10 opacity-20 blur-2xl group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-500/10 rounded-full -z-10 blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
            </div>

            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-10 right-10 sm:-right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 z-20 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900 leading-none mb-1">2.3M+</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Shipments Moved</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
