"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import {
  FaShippingFast, FaIndustry, FaTrain, FaWarehouse,
  FaSolarPanel, FaTruck, FaShip, FaBoxes,
  FaFlask, FaProjectDiagram,
  FaLock, FaCubes, FaArrowRight
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
      hex: "linear-gradient(135deg, #1d4ed8, #1e40af)",
      gradient: "from-blue-600 to-indigo-700",
      services: [
        {
          name: "EMPTY CONTAINER TRANSPORTATION",
          description: "Pioneers in empty container movement across all major ports and ICDs. Cost-effective solutions with industry-leading turnaround times.",
          icon: <FaBoxes className="text-[#1d4ed8]" />,
          slug: "empty-container-transportation",
          features: ["40% cost savings", "24/7 availability", "Pan-India coverage"]
        },
        {
          name: "EXPORT & IMPORT CONTAINERS",
          description: "Full-service container logistics for 20ft, 40ft, and 45ft units. Seamless port-to-door connectivity with real-time tracking.",
          icon: <FaShippingFast className="text-[#1d4ed8]" />,
          slug: "export-import-containers",
          features: ["Zero documentation delays", "Customs clearance support", "Damage-free delivery"]
        },
        {
          name: "DOMESTIC CARGO SOLUTIONS",
          description: "Move your domestic cargo in our 20-foot or 40-foot ISO containers. Secure transportation without owning the container.",
          icon: <FaTruck className="text-[#1d4ed8]" />,
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
      hex: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      gradient: "from-amber-500 to-orange-600",
      services: [
        {
          name: "PROJECT CARGO MANAGEMENT (ODC)",
          description: "Oversized and heavy machinery transportation with route surveys, permits, and specialized vehicles. No cargo too complex.",
          icon: <FaIndustry className="text-[#8b5cf6]" />,
          slug: "over-dimension-cargo",
          features: ["Custom engineering", "Permit management", "Dedicated project managers"]
        },
        {
          name: "CHEMICAL TRANSPORTATION",
          description: "Certified hazardous and non-hazardous chemical transport with safety-trained drivers and compliant vehicles.",
          icon: <FaFlask className="text-[#8b5cf6]" />,
          slug: "chemical-transportation",
          features: ["ADR-certified drivers", "Emergency response protocols", "Comprehensive insurance"]
        },
        {
          name: "SOLAR PANEL & PARTS TRANSPORTATION",
          description: "Precision-engineered solar transportation with trained drivers and specialized equipment for fragile renewable energy components.",
          icon: <FaSolarPanel className="text-[#8b5cf6]" />,
          slug: "solar-panel-transportation",
          features: ["Precision stacking", "Last-mile focus", "Renewable energy expertise"]
        },
        {
          name: "BULK CARGO TRANSPORTATION",
          description: "Steel coils, grains, construction materials, and industrial goods with optimized vehicle configurations for maximum volume.",
          icon: <FaWarehouse className="text-[#8b5cf6]" />,
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
      hex: "linear-gradient(135deg, #8b5cf6, #f43f5e)",
      gradient: "from-emerald-500 to-teal-700",
      services: [
        {
          name: "RAIL SERVICES",
          description: "Cost-effective rail transportation for high-volume, low-value products. Seamlessly integrated Rail + Road hub solutions.",
          icon: <FaTrain className="text-[#f43f5e]" />,
          slug: "rail-services",
          features: ["40% cost savings", "Station-to-station visibility", "Bulk capacity"]
        },
        {
          name: "COASTAL SERVICES",
          description: "Strategic coastal shipping services connecting 10 major Indian ports. Significant cost savings for long-distance movements.",
          icon: <FaShip className="text-[#f43f5e]" />,
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
      hex: "linear-gradient(135deg, #f43f5e, #9f1239)",
      gradient: "from-violet-600 to-purple-800",
      services: [
        {
          name: "HIGH-VALUE GOODS ESCORT",
          description: "Armed security escort services with GPS tracking for valuable, sensitive, or high-risk cargo shipments nationwide.",
          icon: <FaLock className="text-[#9f1239]" />,
          slug: "high-value-goods",
          features: ["Armed security", "24/7 GPS tracking", "Dedicated escorts"]
        },
        {
          name: "LCL CONSOLIDATION",
          description: "Small package delivery across India with consolidated shipping. Pay only for the space you use.",
          icon: <FaCubes className="text-[#9f1239]" />,
          slug: "lcl-consolidation",
          features: ["Pay per volume", "Weekly sailing/trucking", "Cost-effective"]
        },
        {
          name: "STORAGE & WAREHOUSING",
          description: "Climate-controlled facilities and open yard storage near major ports with advanced inventory management.",
          icon: <FaWarehouse className="text-[#9f1239]" />,
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
                  style={{ background: cat.hex }}
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
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 max-w-[1600px] mx-auto py-24 relative overflow-hidden">
        {/* Category Sections */}
        <div className="space-y-48">
          {serviceCategories.map((category, catIdx) => (
            <motion.section
              key={category.id}
              id={category.id}
              className="relative scroll-mt-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Massive Watermark for each section */}
              <div className="absolute -top-12 left-0 w-full flex justify-center -z-10 pointer-events-none select-none opacity-[0.03]">
                <span className="text-[12rem] md:text-[20rem] font-black text-slate-900 whitespace-nowrap">
                  {catIdx % 2 === 0 ? "NISHA" : "LOGISTICS"}
                </span>
              </div>

              {/* Category Header */}
              <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-16 relative">
                <div className="max-w-4xl space-y-6">
                  {/* Category Accent */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 text-sm font-black text-gray-900">
                      {catIdx + 1}
                    </div>
                    <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">
                      {category.id.replace(/-/g, ' ')}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
                    {category.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium max-w-3xl">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Service Cards Grid - "Align in one row all" */}
              <div className={`grid grid-cols-1 md:grid-cols-2 ${category.services.length >= 4 ? 'lg:grid-cols-4' :
                category.services.length === 3 ? 'lg:grid-cols-3' :
                  'lg:grid-cols-2'
                } gap-8`}>
                {category.services.map((service, sIdx) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    themeColor={getThemeColor(category.gradient)}
                    gradient={category.hex}
                    index={sIdx}
                  />
                ))}
              </div>
            </motion.section >
          ))}
        </div>
      </div>

      <CtaBanner />
      <Footer />
    </div>
  );
};

export default ServicesPage;