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
    <section aria-label="Companies using our product" className="py-10 sm:py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 -mt-16 ">
        <p className="text-center text-sm md:text-xl text-gray-900 -mb-10">
          Over 32k+ software businesses growing with ShipMate
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-6">
          <ul className="flex items-center justify-between gap-6 flex-wrap lg:flex-nowrap">
            {logos.map((logo) => (
              <li key={logo.src} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={48}
                  className="h-8 md:h-10 lg:h-10 w-auto object-contain select-none transition"
                  sizes="(max-width: 1024px) 33vw, 12vw"
                />
              </li>
            ))}
          </ul>

          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/company/company-right-logo.png"
              alt="Truck company graphic"
              width={280}
              height={96}
              className="h-12 md:h-14 lg:h-46 w-auto object-contain select-none mb-10"
              sizes="(max-width: 1024px) 40vw, 280px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}