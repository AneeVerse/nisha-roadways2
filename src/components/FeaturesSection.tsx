"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { History, Globe, Sparkles, Package, Headset } from 'lucide-react';

const FeaturesSection = () => {

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

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
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

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                Decades of Excellence <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Built on Foundation of Trust.
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
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


          </motion.div>

          {/* Right Side - Visuals Integrated from Second Image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-[3rem] p-8 sm:p-12 text-white relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Package className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-black leading-tight">
                  Integrated Partnership <br />Approach
                </h3>

                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  When you work with Nisha Roadways, you gain an entire network.
                  We handle the coordination, so you can focus on your business growth.
                </p>

                <div className="pt-8 border-t border-white/10 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-black">
                        P{i}
                      </div>
                    ))}
                  </div>
                  <div className="text-blue-400 font-bold text-sm">
                    Joined by 50+ Trusted Providers
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 right-0 lg:-right-6 xl:-right-10 bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-100 z-20"
            >
              <Headset className="w-10 h-10 text-blue-600 mb-4" />
              <div className="text-3xl font-black text-slate-900 leading-none">24/7</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Single Point Support</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
