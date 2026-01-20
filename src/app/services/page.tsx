"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import {
  FaShippingFast, FaIndustry, FaTrain, FaWarehouse,
  FaSolarPanel, FaTruck, FaShip, FaBoxes,
  FaFlask, FaShieldAlt, FaProjectDiagram, FaGlobe,
  FaLock, FaCubes, FaTrailer, FaWind, FaArrowRight
} from "react-icons/fa";

const ServicesPage = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const getThemeColor = (gradient: string) => {
    if (gradient.includes('blue')) return 'blue';
    if (gradient.includes('amber')) return 'amber';
    if (gradient.includes('emerald')) return 'emerald';
    if (gradient.includes('violet')) return 'violet';
    return 'blue';
  };

  const serviceCategories = [
    {
      id: "container-logistics",
      title: "Container Logistics Solutions",
      description: "Complete end-to-end containerized cargo management with industry-leading efficiency and reliability.",
      color: "bg-blue-50 border-blue-200",
      hex: "#317fb9",
      gradient: "from-blue-600 to-indigo-700",
      services: [
        {
          name: "EMPTY CONTAINER TRANSPORTATION",
          description: "Pioneers in empty container movement across all major ports and ICDs. Cost-effective solutions with industry-leading turnaround times.",
          icon: <FaBoxes />,
          slug: "empty-container-transportation",
          features: ["40% cost savings", "24/7 availability", "Pan-India coverage"]
        },
        {
          name: "EXPORT & IMPORT CONTAINERS",
          description: "Full-service container logistics for 20ft, 40ft, and 45ft units. Seamless port-to-door connectivity with real-time tracking.",
          icon: <FaShippingFast />,
          slug: "export-import-containers",
          features: ["Zero documentation delays", "Customs clearance support", "Damage-free delivery"]
        },
        {
          name: "DOMESTIC CARGO SOLUTIONS",
          description: "Move your domestic cargo in our 20-foot or 40-foot ISO containers. Secure transportation without owning the container.",
          icon: <FaTruck />,
          slug: "domestic-cargo-containers",
          features: ["Your own seals", "GPS tracking", "No container rental"]
        }
      ]
    },
    {
      id: "specialized-cargo",
      title: "Specialized Cargo Solutions",
      description: "Custom-engineered logistics for unique, complex, and high-stakes cargo requirements.",
      color: "bg-amber-50 border-amber-200",
      hex: "#63579b",
      gradient: "from-amber-500 to-orange-600",
      services: [
        {
          name: "PROJECT CARGO MANAGEMENT (ODC)",
          description: "Oversized and heavy machinery transportation with route surveys, permits, and specialized vehicles. No cargo too complex.",
          icon: <FaIndustry />,
          slug: "over-dimension-cargo",
          features: ["Custom engineering", "Permit management", "Dedicated project managers"]
        },
        {
          name: "CHEMICAL TRANSPORTATION",
          description: "Certified hazardous and non-hazardous chemical transport with safety-trained drivers and compliant vehicles.",
          icon: <FaFlask />,
          slug: "chemical-transportation",
          features: ["ADR-certified drivers", "Emergency response protocols", "Comprehensive insurance"]
        },
        {
          name: "SOLAR PANEL & PARTS TRANSPORTATION",
          description: "Precision-engineered solar transportation with trained drivers and specialized equipment for fragile renewable energy components.",
          icon: <FaSolarPanel />,
          slug: "solar-panel-transportation",
          features: ["Precision stacking", "Last-mile focus", "Renewable energy expertise"]
        },
        {
          name: "BULK CARGO TRANSPORTATION",
          description: "Steel coils, grains, construction materials, and industrial goods with optimized vehicle configurations for maximum volume.",
          icon: <FaWarehouse />,
          slug: "bulk-cargo-solutions",
          features: ["Load optimization", "Reduced handling damage", "Flexible scheduling"]
        }
      ]
    },
    {
      id: "multimodal-transport",
      title: "Multimodal & Coastal Solutions",
      description: "Integrated, cost-effective transportation across rail and sea for sustainable, long-distance logistics.",
      color: "bg-emerald-50 border-emerald-200",
      hex: "#964f77",
      gradient: "from-emerald-500 to-teal-700",
      services: [
        {
          name: "RAIL SERVICES",
          description: "Cost-effective rail transportation for high-volume, low-value products. Seamlessly integrated Rail + Road hub solutions.",
          icon: <FaTrain />,
          slug: "rail-services",
          features: ["40% cost savings", "Station-to-station visibility", "Bulk capacity"]
        },
        {
          name: "COASTAL SERVICES",
          description: "Strategic coastal shipping services connecting 10 major Indian ports. Significant cost savings for long-distance movements.",
          icon: <FaShip />,
          slug: "coastal-services",
          features: ["10 major ports", "Eco-friendly mode", "High-volume efficiency"]
        }
      ]
    },
    {
      id: "value-added-services",
      title: "Value-Added Logistics",
      description: "Premium enhancements that provide extra security, flexibility, and end-to-end efficiency to your supply chain.",
      color: "bg-violet-50 border-violet-200",
      hex: "#cd3f45",
      gradient: "from-violet-600 to-purple-800",
      services: [
        {
          name: "HIGH-VALUE GOODS ESCORT",
          description: "Armed security escort services with GPS tracking for valuable, sensitive, or high-risk cargo shipments nationwide.",
          icon: <FaLock />,
          slug: "high-value-goods",
          features: ["Armed security", "24/7 GPS tracking", "Dedicated escorts"]
        },
        {
          name: "LCL CONSOLIDATION",
          description: "Small package delivery across India with consolidated shipping. Pay only for the space you use.",
          icon: <FaCubes />,
          slug: "lcl-consolidation",
          features: ["Pay per volume", "Weekly sailing/trucking", "Cost-effective"]
        },
        {
          name: "STORAGE & WAREHOUSING",
          description: "Climate-controlled facilities and open yard storage near major ports with advanced inventory management.",
          icon: <FaWarehouse />,
          slug: "storage-warehousing",
          features: ["Port proximity", "Security protocols", "Flexible capacity"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-950 to-blue-900"
          style={{ y: backgroundY }}
        >
          {/* Subtle overlay elements */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-semibold mb-6 backdrop-blur-md mt-12"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Twelve Integrated Logistics Solutions
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              We transform complex logistics challenges into seamless competitive advantages across every major touchpoint.
            </p>

            {/* Category Navigation Tags (Pills) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {serviceCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-5 py-2.5 rounded-full text-white font-bold transition-all text-sm hover:scale-105 shadow-lg flex items-center gap-2"
                  style={{ backgroundColor: (cat as any).hex }}
                >
                  {cat.title}
                  <FaArrowRight className="text-[10px]" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Category Sections */}
        <div className="space-y-40">
          {serviceCategories.map((category, idx) => (
            <motion.section
              key={category.id}
              id={category.id}
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Left side: Category info */}
                <div className="lg:w-1/3 lg:sticky lg:top-32">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-6 shadow-xl"
                    style={{ backgroundColor: (category as any).hex }}
                  >
                    <FaProjectDiagram className="text-2xl" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="space-y-4">
                    {category.services.map((s) => (
                      <a
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 text-gray-800 font-semibold hover:text-blue-600 transition-colors group"
                      >
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <FaArrowRight className="text-[10px]" />
                        </div>
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Right side: Service cards */}
                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
                  {category.services.map((service, sIdx) => (
                    <ServiceCard
                      key={service.slug}
                      service={service}
                      themeColor={getThemeColor(category.gradient)}
                      gradient={category.gradient}
                      index={sIdx}
                    />
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      <CtaBanner />
      <Footer />
    </div>
  );
};

export default ServicesPage;