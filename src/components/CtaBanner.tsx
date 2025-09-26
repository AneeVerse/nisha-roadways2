
import Image from "next/image";

export default function CtaBanner() {
  return (
    <section aria-label="Call to action" className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[28px] bg-white shadow-[0_10px_25px_RGBA(0,0,0,0.08)] sm:shadow-[0_20px_40px_RGBA(0,0,0,0.08)] ring-1 ring-black/5">
          {/* Trucks */}
          <div className="pointer-events-none select-none absolute inset-y-0 left-0 w-[30%] sm:w-[32%] md:w-[30%] lg:w-[28%] opacity-80 sm:opacity-90 md:opacity-100">
            <Image
              src="/images/cta/left.png"
              alt="Truck left"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 32vw, 28vw"
              priority
            />
          </div>
          <div className="pointer-events-none select-none absolute inset-y-0 right-0 w-[30%] sm:w-[32%] md:w-[30%] lg:w-[28%] opacity-80 sm:opacity-90 md:opacity-100">
            <Image
              src="/images/cta/right.png"
              alt="Truck right"
              fill
              className="object-contain object-right"
              sizes="(max-width: 640px) 30vw, (max-width: 1024px) 32vw, 28vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 py-6 sm:py-8 md:py-12 lg:py-14 xl:py-16 grid place-items-center text-center px-3 sm:px-4 md:px-6">
            <h2 className="max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 leading-[1.2] sm:leading-tight tracking-tight">
              Simplify your logistics with easy
              <br className="hidden sm:block" /> booking & real‑time tracking
            </h2>
            <p className="mt-2 sm:mt-3 md:mt-4 max-w-2xl text-gray-600 text-xs sm:text-sm md:text-base px-1 sm:px-2 leading-relaxed">
              From pickup to global delivery, ShipMate makes shipping simple, transparent, and stress‑free. We handle the complexity so you can focus on what matters most.
            </p>
            <div className="mt-3 sm:mt-4 md:mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-[#2489be] via-[#89517f] to-[#cb4147] text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base font-semibold shadow-md hover:from-[#1e7aa8] hover:via-[#7a4a72] hover:to-[#b8393f] transition-all duration-200 hover:scale-105"
              >
                Calculate Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" strokeLinecap="round" />
                  <path d="M7 7h10v10" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}