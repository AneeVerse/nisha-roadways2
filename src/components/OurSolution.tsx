"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Truck, Container, Shield, Package, Warehouse, Zap, CheckCircle2, ArrowRight } from "lucide-react"
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
    className: "lg:col-span-2 lg:row-span-1"
  },
  {
    key: "specialized-cargo",
    title: "Specialized Transport",
    description: "Expert handling for ODC and delicate solar components across challenging terrains.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    benefits: ["Solar Panel Transport", "Over Dimension Cargo (ODC)", "Bulk Cargo Handling"],
    icon: Zap,
    link: "/services#specialized-cargo",
    className: "lg:col-span-1 lg:row-span-2"
  },
  {
    key: "multimodal-transport",
    title: "Integrated Logistics",
    description: "Seamless multimodal connectivity via rail and coastal routes for cost-effective shipping.",
    image: "https://images.unsplash.com/photo-1574241604938-db89ce47df3b?q=80&w=1914&auto=format&fit=crop",
    benefits: ["Rail Freight Services", "Coastal Transport", "LCL Consolidation"],
    icon: Truck,
    link: "/services#multimodal-transport",
    className: "lg:col-span-1 lg:row-span-1"
  },
  {
    key: "value-added-services",
    title: "Value-Added Care",
    description: "Beyond transportation – warehousing and high-value cargo protection systems.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
    benefits: ["Storage & Warehousing", "High Value Goods", "Chemical Transport"],
    icon: Shield,
    link: "/services#value-added-services",
    className: "lg:col-span-1 lg:row-span-1"
  }
]

export default function OurSolution() {
  return (
    <section className="relative pt-24 pb-32 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-10"></div>

      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
        {/* Centered Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full w-fit">
              <Package className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-black text-blue-700 uppercase tracking-widest">Our Integrated Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Smarter Logistics. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">Infinite Possibilities.</span>
            </h2>

            {/* Gradient underline */}
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mx-auto rounded-full"></div>

            <p className="max-w-3xl text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
              We orchestrate comprehensive supply chain solutions that anticipate challenges,
              optimize resources, and change what's possible for businesses across India.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px] lg:auto-rows-[400px]">
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
                className={`group relative rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl border border-white/5 ${service.className}`}
              >
                {/* Background Image with Parallax Hint */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out"
                />

                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent group-hover:via-slate-950/40 transition-all duration-700"></div>

                {/* Content Container */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="relative z-10 space-y-5">
                    {/* Icon Box with Glow */}
                    <div className="relative w-14 h-14">
                      <div className="absolute inset-0 bg-blue-600 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                      <div className="relative w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-white tracking-tight">{service.title}</h3>
                      <p className="text-slate-300 text-base font-medium leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {service.description}
                      </p>
                    </div>

                    {/* Benefit Pills */}
                    <div className="flex flex-wrap gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {service.benefits.map((benefit, i) => (
                        <span key={i} className="text-[11px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/90">
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4">
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-3 text-sm font-black text-blue-400 group/link hover:text-white transition-all duration-300"
                      >
                        <span className="relative">
                          EXPLORE SOLUTIONS
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
                        </span>
                        <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Premium Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-[3rem] border border-white/10 pointer-events-none group-hover:border-blue-500/30 transition-colors duration-500"></div>
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
          className="mt-20 text-center"
        >
          <Link href="/services">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-black text-sm uppercase tracking-widest rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Discover Comprehensive Solutions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
