"use client";

import Image from "next/image";

const logos = [
  { src: "/images/company/logo.svg", alt: "Company logo 1" },
  { src: "/images/company/medium.png", alt: "Company logo 2" },
  { src: "/images/company/Republic-logo.png", alt: "Company logo 3" },
  { src: "/images/company/Wow-Entrepreneurs-Logo-PNG.png", alt: "Company logo 4" },
  { src: "/images/company/Deccan-Business-PNG-300x104.png", alt: "Company logo 5" },
  { src: "/images/company/RD-Times-Business-PNG-5.png", alt: "Company logo 6" },
];

export default function CompanyLogos() {
  return (
    <section aria-label="Companies using our product" className="py-8 sm:py-10 md:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 mt-4 sm:mt-6 md:mt-8 lg:mt-0 mb-20">
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-900 mb-14 sm:mb-6 md:mb-8 px-2 sm:px-4 leading-relaxed">
          Over 32k+ software businesses growing with ShipMate
        </p>

        {/* Logos marquee with truck fixed on the right */}
        <div className="relative">
          {/* Scrolling logos */}
          <div className="overflow-hidden mask-gradient">
            <ul
              className="marquee-track gap-6 sm:gap-8 md:gap-10 animate-[logos-marquee_30s_linear_infinite] hover:[animation-play-state:paused]"
              aria-label="Scrolling company logos"
            >
              {[...logos, ...logos].map((logo, idx) => (
                <li key={`${logo.src}-${idx}`} className="flex items-center justify-center px-2 sm:px-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={48}
                    className="h-8 sm:h-7 md:h-9 lg:h-10 w-auto object-contain select-none filter grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition"
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 12vw"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Fixed truck overlayed on the right; logos pass beneath it */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end z-20 pr-0 -mt-16">
            <Image
              src="/images/company/company-right-logo.png"
              alt="Truck company graphic"
              width={280}
              height={96}
              className="h-40 sm:h-14 md:h-16 lg:h-20 xl:h-60 w-auto object-contain select-none"
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, 280px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
