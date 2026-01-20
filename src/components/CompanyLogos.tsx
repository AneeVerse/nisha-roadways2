"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const logos = [
  { src: "/images/company/images1.svg", alt: "Company logo 1" },
  { src: "/images/company/images2.svg", alt: "Company logo 2" },
  { src: "/images/company/images3.svg", alt: "Company logo 3" },
  { src: "/images/company/images4.svg", alt: "Company logo 4" },
  { src: "/images/company/images5.svg", alt: "Company logo 5" },
  { src: "/images/company/images6.svg", alt: "Company logo 6" },
];

export default function CompanyLogos() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a triple set of logos for infinite feel
  const allLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section aria-label="Companies using our services" className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 mt-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Companies We Have <span className="text-blue-600">Collaborated</span> With
          </h2>
        </div>

        {/* Company Logos Container */}
        <div className="relative">
          {/* Gradient masks for smooth fade effect - Subtle on mobile to allow viewing cards */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

          {/* Marquee Track */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide active:cursor-grabbing cursor-grab"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <motion.div
              className="flex items-center gap-6 sm:gap-10 md:gap-16 py-4"
              animate={!isHovered ? {
                x: [0, -1035], // Approximate half of the duplicated list
              } : {}}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              // Dragging support
              drag="x"
              dragConstraints={containerRef}
              dragElastic={0.1}
            >
              {allLogos.map((logo, idx) => (
                <div key={`${logo.src}-${idx}`} className="flex-shrink-0">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-1">
                    <div className="relative w-20 sm:w-28 h-8 sm:h-10">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain select-none filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
                        sizes="(max-width: 640px) 80px, 120px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
