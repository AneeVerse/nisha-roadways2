"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Truck, Container, Shield, Package, Boxes, ArrowRight } from "lucide-react"
import Link from "next/link"

const SERVICES = [
  {
    key: "container-logistics",
    title: "Container Solutions",
    description: "End-to-end container management from ports to your doorstep with real-time tracking.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Empty Container Transportation (ECT)", "Export Import Containers", "Domestic Cargo Services"],
    icon: Container,
    link: "/services#container-logistics",
    className: "col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1"
  },
  {
    key: "specialized-cargo",
    title: "Specialized Transport",
    description: "Expert handling for ODC and delicate solar components across challenging terrains.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Solar Panel Transport", "Over Dimension Cargo (ODC)", "Bulk Cargo Handling"],
    icon: Boxes,
    link: "/services#specialized-cargo",
    className: "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-2"
  },
  {
    key: "multimodal-transport",
    title: "Integrated Logistics",
    description: "Seamless multimodal connectivity via rail and coastal routes for cost-effective shipping.",
    image: "https://images.unsplash.com/photo-1574241604938-db89ce47df3b?q=80&w=1914&auto=format&fit=crop",
    benefits: ["Rail Freight Services", "Coastal Transport", "LCL Consolidation"],
    icon: Truck,
    link: "/services#multimodal-transport",
    className: "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1"
  },
  {
    key: "value-added-services",
    title: "Value-Added Care",
    description: "Beyond transportation – warehousing and high-value cargo protection systems.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
    benefits: ["Storage & Warehousing", "High Value Goods", "Chemical Transport"],
    icon: Shield,
    link: "/services#value-added-services",
    className: "col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1"
  }
]

export default function OurSolution() {
  return (
    <section className="relative pt-14 pb-20 sm:pt-24 sm:pb-32 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Centered Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/10 border border-blue-600/20 rounded-full w-fit">
              <Package className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-widest">Our Integrated Solutions</span>
            </div>

            <h2 className="text-[10px] sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight whitespace-nowrap">
              Smarter Logistics. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">Infinite Possibilities.</span>
            </h2>

            {/* Gradient underline */}
            <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mx-auto rounded-full"></div>

            <p className="max-w-xl text-xs sm:text-lg text-slate-600 font-medium leading-relaxed mt-2">
              We orchestrate comprehensive supply chain solutions that anticipate challenges,
              optimize resources, and change what's possible for businesses across India.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 auto-rows-[160px] sm:auto-rows-[300px] lg:auto-rows-[350px]">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.32, 0.9]
                }}
                className={`group relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-xl border border-white/5 ${service.className}`}
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-out"
                />

                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:via-slate-950/20 transition-all duration-700"></div>

                {/* Content Container */}
                <div className="absolute inset-0 p-3 sm:p-8 flex flex-col justify-between">

                  {/* ========== MOBILE LAYOUT (below lg) ========== */}
                  <div className="lg:hidden flex flex-col justify-between h-full">
                    {/* Top: Icon + Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <Link href={service.link} className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Bottom: Title + All Tags */}
                    <div>
                      <h3 className="text-[11px] font-bold text-white leading-tight mb-1.5">
                        {service.title}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.map((benefit, i) => (
                          <span key={i} className="text-[5px] font-bold uppercase tracking-wide bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-white/20 text-white inline-block">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ========== DESKTOP LAYOUT (lg and above) ========== */}
                  <div className="hidden lg:flex flex-col justify-between h-full">
                    {/* Top Bar - Icon & Title */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start gap-4">
                        <div className="relative w-12 h-12">
                          <div className="absolute inset-0 bg-blue-600 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                          <div className="relative w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center shadow-2xl group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Bottom Area */}
                    <div className="space-y-4">
                      <p className="text-slate-300 text-sm font-medium leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, i) => (
                          <span key={i} className="text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white shadow-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <div className="pt-1">
                        <Link
                          href={service.link}
                          className="inline-flex items-center gap-2 text-xs font-black text-blue-400 group/link hover:text-white transition-all duration-300"
                        >
                          <span className="relative">
                            EXPLORE SOLUTIONS
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 pointer-events-none group-hover:border-blue-500/40 transition-colors duration-500"></div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <Link href="/services">
            <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-black text-[10px] sm:text-xs uppercase tracking-widest rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <span className="hidden sm:inline">Discover Comprehensive Solutions</span>
                <span className="sm:hidden">Explore All Services</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
