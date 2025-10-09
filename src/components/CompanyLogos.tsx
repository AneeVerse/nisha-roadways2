"use client";

import Image from "next/image";

const logos = [
  { src: "/images/company/images1.svg", alt: "Company logo 1" },
  { src: "/images/company/images2.svg", alt: "Company logo 2" },
  { src: "/images/company/images3.svg", alt: "Company logo 3" },
  { src: "/images/company/images4.svg", alt: "Company logo 4" },
  { src: "/images/company/images5.svg", alt: "Company logo 5" },
  { src: "/images/company/images6.svg", alt: "Company logo 6" },
];

export default function CompanyLogos() {
  return (
    <section aria-label="Companies using our services" className="bg-white py-12 sm:py-16 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold text-gray-900 tracking-tight mb-6">
            COMPANIES WE HAVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">COLLABORATED </span> WITH
          </h2>
             <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 mx-auto rounded-full mb-6"></div>
         
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by Industry Leaders Across 16+ Sectors
          </p>
        </div>


        {/* Company Logos Marquee */}
        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling logos */}
          <div className="overflow-hidden -mt-10">
            <ul
              className="flex items-center gap-8 sm:gap-12 md:gap-16 animate-[logos-marquee_40s_linear_infinite] hover:[animation-play-state:paused]"
              aria-label="Scrolling company logos"
            >
              {[...logos, ...logos, ...logos].map((logo, idx) => (
                <li key={`${logo.src}-${idx}`} className="flex items-center justify-center flex-shrink-0">
                  <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-105">
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
