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

  const handleMouseUp = (e: React.MouseEvent) => {
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
    <section id="our-solution" className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20 mt-20">
      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 font-medium">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">OUR SERVICES</span>
      </div>

      {/* Title */}
      <h2 className="mt-4 sm:mt-5 text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold leading-tight tracking-tighter">
        <span className="text-gray-900">Your Trusted Partner for</span>{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">Effortless Global Shipping</span>
      </h2>

      {/* Scrolling Tabs */}
      <div className="mt-8 sm:mt-10 px-4 py-6">
        <div 
          ref={containerRef}
          className={`flex justify-center overflow-hidden py-4 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
            {visibleServices.map((service, index) => {
              const isMiddle = index === 1;
              const isSide = index === 0 || index === 2;
              
              return (
                <button
                  key={`${service.key}-${currentIndex}-${index}`}
                  type="button"
                  onClick={() => handleTabClick(index)}
                  className={`
                    transition-all duration-700 ease-in-out rounded-full font-medium whitespace-nowrap transform 
                    w-[280px] sm:w-[320px] h-[60px] sm:h-[70px] flex items-center justify-center text-center
                    ${isMiddle 
                      ? 'text-white bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] scale-110 text-base sm:text-lg z-10' 
                      : 'text-gray-700 bg-white border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 scale-95 text-sm sm:text-base shadow-md'
                    }
                  `}
                >
                  {service.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content card */}
      <div className="mt-6 sm:mt-8 mx-auto max-w-[1100px] rounded-[24px] overflow-hidden bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] shadow-lg">
        <div className="p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-white/10">
              <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] xl:h-[360px]">
                <Image
                  key={activeService.imageSrc}
                  src={activeService.imageSrc}
                  alt={activeService.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover transition-opacity duration-500"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center text-white px-1 md:px-2 lg:px-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug transition-all duration-500">
                {activeService.heading}
              </h3>
              <p className="mt-3 text-white/90 leading-relaxed text-sm md:text-[15px] transition-all duration-500">
                {activeService.description}
              </p>

              {/* Benefits */}
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-white/95 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {activeService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-xs sm:text-sm text-white/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="group inline-flex items-center rounded-full bg-white text-[#6a31eb] pl-5 pr-2 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-white/90"
                >
                  <span>Get a Free Quote</span>
                  <span className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
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


