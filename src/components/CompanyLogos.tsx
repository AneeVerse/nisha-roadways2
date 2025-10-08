"use client";

import Image from "next/image";
import { Building2, Factory, Truck, Package } from "lucide-react";

const logos = [
  { src: "/images/company/logo.svg", alt: "Company logo 1" },
  { src: "/images/company/medium.png", alt: "Company logo 2" },
  { src: "/images/company/Republic-logo.png", alt: "Company logo 3" },
  { src: "/images/company/Wow-Entrepreneurs-Logo-PNG.png", alt: "Company logo 4" },
  { src: "/images/company/Deccan-Business-PNG-300x104.png", alt: "Company logo 5" },
  { src: "/images/company/RD-Times-Business-PNG-5.png", alt: "Company logo 6" },
];

const sectors = [
  { icon: <Building2 className="w-5 h-5" />, name: "Manufacturing" },
  { icon: <Factory className="w-5 h-5" />, name: "Pharmaceuticals" },
  { icon: <Truck className="w-5 h-5" />, name: "Automotive" },
  { icon: <Package className="w-5 h-5" />, name: "FMCG" },
];

export default function CompanyLogos() {
  return (
    <section aria-label="Companies using our services" className="py-12 sm:py-16 md:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-2">
            Across 16+ Sectors
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
        </div>



        {/* Company Logos Marquee */}
        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50/50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50/50 to-transparent z-10"></div>
          
          {/* Scrolling logos */}
          <div className="overflow-hidden">
            <ul
              className="flex items-center gap-8 sm:gap-12 md:gap-16 animate-[logos-marquee_40s_linear_infinite] hover:[animation-play-state:paused]"
              aria-label="Scrolling company logos"
            >
              {[...logos, ...logos, ...logos].map((logo, idx) => (
                <li key={`${logo.src}-${idx}`} className="flex items-center justify-center flex-shrink-0">
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={40}
                      className="h-8 sm:h-10 w-auto object-contain select-none filter grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-300"
                      sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 120px"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
          
        
      </div>
    </section>
  );
}
