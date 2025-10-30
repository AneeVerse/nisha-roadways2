"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';
import { 
  FaShippingFast, FaIndustry, FaTrain, FaWarehouse,
  FaSolarPanel, FaTruck, FaShip, FaBoxes,
  FaFlask, FaShieldAlt, FaMapMarkedAlt, FaArrowRight
} from "react-icons/fa";
import '../../styles/services-animations.css';

const ServicesPage = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  
  // Helper function to extract theme color from gradient
  const getThemeColor = (gradient: string) => {
    if (gradient.includes('blue')) return 'blue';
    if (gradient.includes('amber')) return 'amber';
    if (gradient.includes('emerald')) return 'emerald';
    if (gradient.includes('violet')) return 'violet';
    return 'blue'; // default
  };
  const serviceCategories = [
    {
      id: "container-logistics",
      title: "Container Logistics Solutions",
      description: "Complete containerized cargo management with end-to-end solutions for all your container transportation needs.",
      color: "bg-blue-50 border-blue-200",
      gradient: "from-blue-500 to-blue-600",
      services: [
        {
          name: "Empty Container Transportation (ECT)",
          description: "Comprehensive empty container services for both Exim and domestic requirements with efficient positioning and repositioning.",
          icon: <FaBoxes />,
          slug: "empty-container-transportation",
          features: [
            "Exim empty containers (shipping lines)",
            "Domestic empty containers (sale/lease)",
            "Efficient positioning and repositioning"
          ]
        },
        {
          name: "Export Import Containers",
          description: "Specialized ExIm transport services facilitating seamless international trade operations.",
          icon: <FaShippingFast />,
          slug: "export-import-containers",
          features: [
            "Export container logistics",
            "Import container logistics", 
            "Customs clearance support"
          ]
        },
        {
          name: "Domestic Cargo In Our Containers",
          description: "Secured cargo transportation in our owned ISO containers for domestic shipments.",
          icon: <FaTruck />,
          slug: "domestic-cargo-containers",
          features: [
            "Containerized domestic transportation",
            "Secured cargo in owned ISO containers",
            "Door-to-door delivery"
          ]
        }
      ]
    },
    {
      id: "specialized-cargo",
      title: "Specialized Cargo Solutions", 
      description: "Custom solutions for unique cargo requirements with specialized handling and transportation expertise.",
      color: "bg-amber-50 border-amber-200",
      gradient: "from-amber-500 to-amber-600",
      services: [
        {
          name: "Solar Panel & Parts Transportation",
          description: "Specialized logistics for renewable energy components with careful handling of fragile solar equipment.",
          icon: <FaSolarPanel />,
          slug: "solar-panel-transportation",
          features: [
            "Solar modules and photovoltaic panels",
            "Renewable energy components",
            "Temperature-controlled transport"
          ]
        },
        {
          name: "Over Dimension Cargo (ODC)",
          description: "Expert handling of oversized machinery and project cargo with specialized equipment and permits.",
          icon: <FaIndustry />,
          slug: "over-dimension-cargo",
          features: [
            "Oversized machinery and equipment",
            "Project cargo management",
            "Route surveys and permits"
          ]
        },
        {
          name: "Bulk Cargo Transportation",
          description: "Efficient transportation of bulk materials including steel coils, grains, and construction materials.",
          icon: <FaWarehouse />,
          slug: "bulk-cargo-transportation",
          features: [
            "Steel coils and metal products",
            "Grains and agricultural products",
            "Construction materials"
          ]
        },
        {
          name: "Chemical Transportation",
          description: "Safe and compliant transportation of chemicals in specialized tank containers.",
          icon: <FaFlask />,
          slug: "chemical-transportation",
          features: [
            "Hazardous and non-hazardous chemicals",
            "ISO tank containers",
            "Safety compliance and documentation"
          ]
        }
      ]
    },
    {
      id: "multimodal-transport",
      title: "Multimodal Transport Solutions",
      description: "Integrated transportation across multiple modes for optimized logistics and cost-effective solutions.",
      color: "bg-emerald-50 border-emerald-200",
      gradient: "from-emerald-500 to-emerald-600",
      services: [
        {
          name: "Rail Services",
          description: "Comprehensive rail transportation for containers and bulk cargo with integrated rail-road solutions.",
          icon: <FaTrain />,
          slug: "rail-services",
          features: [
            "Container by rail",
            "Bulk cargo by rail",
            "Integrated rail-road solutions"
          ]
        },
        {
          name: "Coastal Services",
          description: "Maritime shipping services across 10 major Indian ports providing cost-effective alternatives to road transport.",
          icon: <FaShip />,
          slug: "coastal-services",
          features: [
            "Coastal shipping across major ports",
            "Maritime alternative to road transport",
            "Port-to-port connectivity"
          ]
        }
      ]
    },
    {
      id: "value-added-services",
      title: "Value-Added Logistics Services",
      description: "Enhanced services for optimal supply chain management with comprehensive storage and specialized handling.",
      color: "bg-violet-50 border-violet-200", 
      gradient: "from-violet-500 to-violet-600",
      services: [
        {
          name: "LCL Consolidation",
          description: "Less-than-Container-Load cargo optimization for small shipments with cost-effective solutions.",
          icon: <FaBoxes />,
          slug: "lcl-consolidation",
          features: [
            "Less-than-Container-Load cargo clubbing",
            "Small shipment optimization",
            "Cost-effective solutions"
          ]
        },
        {
          name: "High Value Goods Transportation",
          description: "Premium cargo services with GPS tracking and armed escort for valuable and sensitive shipments.",
          icon: <FaShieldAlt />,
          slug: "high-value-goods",
          features: [
            "GPS-tracked premium cargo",
            "Armed escort services",
            "Enhanced security solutions"
          ]
        },
        {
          name: "Storage and Warehousing",
          description: "Comprehensive storage solutions including container parks, warehousing, and specialized storage facilities.",
          icon: <FaWarehouse />,
          slug: "storage-warehousing",
          features: [
            "Empty container parks",
            "Loaded container storage",
            "Cold storage and specialized facilities"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
          style={{ y: backgroundY, scale: scaleProgress }}
        >
          {/* Animated geometric shapes */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Enhanced grid pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] animate-pulse" />
          </div>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Comprehensive Logistics Solutions
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
             
              <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                  Our Services
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed font-light"
            >
              From container logistics to specialized cargo solutions, we deliver excellence across every mile of your supply chain journey.
            </motion.p>

           

            {/* Scroll indicator */}
           
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-24 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Service Categories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-blue-600">Logistics Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our full range of specialized services designed to meet every aspect of your transportation and logistics needs.
            </p>
          </motion.div>

          <div className="space-y-24">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.section 
                key={category.id} 
                id={category.id} 
                className="scroll-mt-20"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  {/* Category Card */}
                  <div className={`relative rounded-3xl border border-gray-200/50 overflow-hidden shadow-xl ${category.color} backdrop-blur-sm`}>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/20 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
                    
                    {/* Category Header */}
                    <div className={`relative bg-gradient-to-r ${category.gradient} p-8 md:p-12`}>
                      <div className="relative z-10">
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-4 mb-6"
                        >
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                            {String(categoryIndex + 1).padStart(2, "0")}
                          </div>
                          <div className="h-1 flex-1 bg-white/30 rounded-full">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ delay: 0.5, duration: 1 }}
                              viewport={{ once: true }}
                              className="h-full bg-white/60 rounded-full"
                            ></motion.div>
                          </div>
                        </motion.div>
                        
                        <motion.h2 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight"
                        >
                          {category.title}
                        </motion.h2>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl"
                        >
                          {category.description}
                        </motion.p>

                        {/* Service count badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                          viewport={{ once: true }}
                          className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                        >
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          {category.services.length} Services Available
                        </motion.div>
                      </div>
                      
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTIwIDIwYzAtNS41LTQuNS0xMC0xMC0xMHMtMTAgNC41LTEwIDEwIDQuNSAxMCAxMCAxMCAxMC00LjUgMTAtMTB6bTEwIDBjMC01LjUtNC41LTEwLTEwLTEwcy0xMCA0LjUtMTAgMTAgNC41IDEwIDEwIDEwIDEwLTQuNSAxMC0xMHoiLz48L2c+PC9nPjwvc3ZnPg==')] animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Services Grid */}
                    <div className="relative p-8 md:p-12">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {category.services.map((service, serviceIndex) => (
                          <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: serviceIndex * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                          >
                            <ServiceCard 
                              service={service} 
                              themeColor={getThemeColor(category.gradient)}
                              gradient={category.gradient}
                              index={serviceIndex}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaBanner />
      <Footer />
      </div>
      
  );
};

export default ServicesPage;