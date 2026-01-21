"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { featuredPartnerLogos } from "@/data/partners";

export default function CompanyLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a triple set of logos for infinite feel
  const allLogos = [...featuredPartnerLogos, ...featuredPartnerLogos, ...featuredPartnerLogos];

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
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-20 pointer-events-none"></div>

          {/* Marquee Track - Continuous scroll, no pause on hover */}
          <div
            ref={containerRef}
            className="flex overflow-hidden"
          >
            <motion.div
              className="flex items-center gap-6 sm:gap-8 md:gap-10 py-4"
              animate={{
                x: [0, -1500],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {allLogos.map((logo, idx) => (
                <div key={`${logo.src}-${idx}`} className="flex-shrink-0">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-1">
                    <div className="relative w-24 sm:w-32 h-10 sm:h-12">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain select-none filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
                        sizes="(max-width: 640px) 96px, 128px"
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
