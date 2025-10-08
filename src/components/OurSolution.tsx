"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

type ServiceKey = "empty-container" | "export-import" | "project-cargo" | "chemical" | "bulk-cargo" | "high-value" | "warehousing" | "lcl";

type ServiceConfig = {
  key: ServiceKey;
  label: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  description: string;
  benefits: string[];
};

const SERVICES: ServiceConfig[] = [
  {
    key: "empty-container",
    label: "Empty Container Transportation",
    imageSrc: "/images/our-solution/road.avif",
    imageAlt: "Empty container transportation",
    heading: "Empty Container Transportation",
    description: "Pioneers in empty container movement across all major ports and ICDs. Cost-effective solutions with industry-leading turnaround times.",
    benefits: ["40% cost savings", "24/7 availability", "pan-India coverage"]
  },
  {
    key: "export-import",
    label: "Export & Import Containers",
    imageSrc: "/images/our-solution/ship.avif",
    imageAlt: "Export import containers",
    heading: "Export & Import Containers",
    description: "Full-service container logistics for 20ft, 40ft, and 45ft units. Seamless port-to-door connectivity with real-time tracking.",
    benefits: ["Zero documentation delays", "customs clearance support", "damage-free delivery"]
  },
  {
    key: "project-cargo",
    label: "Project Cargo Management",
    imageSrc: "/images/our-solution/railway.avif",
    imageAlt: "Project cargo management",
    heading: "Project Cargo Management",
    description: "Oversized and heavy machinery transportation with route surveys, permits, and specialized vehicles. No cargo too complex.",
    benefits: ["Custom engineering solutions", "permit management", "dedicated project managers"]
  },
  {
    key: "chemical",
    label: "Chemical Transportation",
    imageSrc: "/images/our-solution/airway.avif",
    imageAlt: "Chemical transportation",
    heading: "Chemical Transportation",
    description: "Certified hazardous and non-hazardous chemical transport with safety-trained drivers and compliant vehicles.",
    benefits: ["ADR-certified drivers", "emergency response protocols", "insurance coverage"]
  },
  {
    key: "bulk-cargo",
    label: "Bulk Cargo Solutions",
    imageSrc: "/images/our-solution/road.avif",
    imageAlt: "Bulk cargo solutions",
    heading: "Bulk Cargo Solutions",
    description: "Steel coils, grains, construction materials, and industrial goods with optimized vehicle configurations.",
    benefits: ["Load optimization", "reduced handling damage", "flexible scheduling"]
  },
  {
    key: "high-value",
    label: "High-Value Goods Escort",
    imageSrc: "/images/our-solution/ship.avif",
    imageAlt: "High-value goods escort",
    heading: "High-Value Goods Escort",
    description: "Armed security escort services with GPS tracking for valuable and sensitive cargo shipments.",
    benefits: ["24/7 surveillance", "trained security personnel", "comprehensive insurance"]
  },
  {
    key: "warehousing",
    label: "Warehousing & Storage",
    imageSrc: "/images/our-solution/railway.avif",
    imageAlt: "Warehousing and storage",
    heading: "Warehousing & Storage",
    description: "Climate-controlled facilities near major ports with inventory management and last-mile distribution.",
    benefits: ["Strategic locations", "inventory tracking", "flexible storage terms"]
  },
  {
    key: "lcl",
    label: "LCL Consolidation",
    imageSrc: "/images/our-solution/airway.avif",
    imageAlt: "LCL consolidation",
    heading: "LCL Consolidation",
    description: "Small package delivery across India with consolidated shipping for cost-effective transportation.",
    benefits: ["Reduced shipping costs", "weekly consolidations", "nationwide reach"]
  }
];

export default function OurSolution() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle tab (index 2)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Get 3 services to display based on current index
  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const serviceIndex = (currentIndex - 1 + i + SERVICES.length) % SERVICES.length;
      visible.push(SERVICES[serviceIndex]);
    }
    return visible;
  };

  const visibleServices = getVisibleServices();
  const activeService = visibleServices[1]; // Middle tab is always active

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
      }, 5000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling]);

  // Handle manual tab click
  const handleTabClick = (clickedIndex: number) => {
    setIsAutoScrolling(false);
    const offset = clickedIndex - 1; // Calculate offset from middle (now index 1)
    setCurrentIndex((prev) => (prev + offset + SERVICES.length) % SERVICES.length);
    
    // Resume auto-scrolling after 8 seconds
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 8000);
  };

  // Handle mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentOffset = e.clientX - dragStart;
    setDragOffset(currentOffset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    const threshold = 100; // Minimum drag distance to trigger scroll
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right (previous service)
        setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
      } else {
        // Dragged left (next service)
        setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
      }
    }
    
    setDragOffset(0);
    
    // Resume auto-scrolling after 8 seconds
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 8000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      
      // Resume auto-scrolling after 8 seconds
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 8000);
    }
  };

  // Handle mouse wheel scroll with smooth transitions
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setIsAutoScrolling(false);
    
    // Smooth scrolling with reduced sensitivity
    const scrollSensitivity = 50;
    if (Math.abs(e.deltaY) > scrollSensitivity) {
      if (e.deltaY > 0) {
        // Scroll right (next service)
        setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
      } else {
        // Scroll left (previous service)
        setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
      }
    }

    // Resume auto-scrolling after 8 seconds
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 8000);
  };

  return (
    <section id="our-solution" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20 mt-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-100/30 via-blue-100/20 to-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-100/30 via-cyan-100/20 to-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 font-medium">
        <div className="flex items-center gap-2">
          <div className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">OUR SERVICES</span>
          <div className="w-8 h-[2px] bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-6 sm:mt-8 text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold leading-tight tracking-tighter -mb-14">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">Complete Logistics</span>{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">Solutions</span>
      </h2>



      {/* Scrolling Tabs */}
      <div className="mt-10 sm:mt-12 px-4 py-8">
        <div 
          ref={containerRef}
          className={`flex justify-center overflow-visible py-6 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex gap-4 sm:gap-6 items-center max-w-6xl transition-transform duration-200"
            style={{
              transform: isDragging ? `translateX(${dragOffset}px)` : 'translateX(0px)'
            }}
          >
            {visibleServices.map((service) => {
              const isMiddle = service.key === SERVICES[currentIndex].key;
              
              return (
                <button
                  key={`${service.key}-${currentIndex}`}
                  type="button"
                  onClick={() => {
                    const visibleIndex = visibleServices.findIndex(s => s.key === service.key);
                    handleTabClick(visibleIndex);
                  }}
                  className={`
                    transition-all duration-700 ease-in-out rounded-2xl font-medium whitespace-nowrap transform 
                    w-[280px] sm:w-[320px] h-[60px] sm:h-[70px] flex items-center justify-center text-center
                    backdrop-blur-sm border relative overflow-hidden group
                    ${isMiddle 
                      ? 'text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 scale-110 text-base sm:text-lg z-10 border-cyan-300/30 shadow-xl shadow-blue-500/25' 
                      : 'text-slate-700 bg-white/80 border-slate-200/50 hover:bg-white/90 hover:border-cyan-300/50 hover:text-cyan-700 scale-95 text-sm sm:text-base shadow-lg hover:shadow-xl hover:shadow-cyan-500/10'
                    }
                  `}
                >
                  {/* Animated background for active button */}
                  {isMiddle && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-500/20 animate-pulse"></div>
                  )}
                  
                  {/* Hover effect for inactive buttons */}
                  {!isMiddle && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  
                  <span className="relative z-10">{service.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content card */}
      <div className="mt-8 sm:mt-10 mx-auto max-w-[1100px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 shadow-2xl shadow-blue-500/20 border border-slate-600/50 backdrop-blur-sm relative">
        {/* Card background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-600/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm border border-slate-500/30 shadow-xl">
              <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]">
                <Image
                  key={activeService.imageSrc}
                  src={activeService.imageSrc}
                  alt={activeService.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover transition-all duration-700 hover:scale-105"
                  priority
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-800/10 to-transparent"></div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center px-2 md:px-4 lg:px-2">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Featured Service</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight transition-all duration-500 text-white">
                {activeService.heading}
              </h3>
              <p className="mt-4 text-slate-300 leading-relaxed text-sm md:text-base transition-all duration-500">
                {activeService.description}
              </p>

              {/* Benefits */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {activeService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-slate-300 group">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="group-hover:text-slate-200 transition-colors duration-200">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pb-4">
                <button
                  type="button"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white pl-6 pr-3 py-3.5 text-sm font-semibold shadow-xl shadow-blue-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 relative overflow-hidden"
                >
                  {/* Button background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10">Get a Free Quote</span>
                  <span className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-white group-hover:bg-white/30 transition-all duration-300 relative z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7" strokeLinecap="round" />
                      <path d="M7 7h10v10" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


