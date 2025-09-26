"use client";

import Image from "next/image";

export default function CtaBanner() {
  return (
    <section aria-label="Call to action" className="py-12 sm:py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
          {/* Trucks */}
          <div className="pointer-events-none select-none absolute inset-y-0 left-0 w-[36%] sm:w-[32%] lg:w-[28%]">
            <Image
              src="/images/cta/left.png"
              alt="Truck left"
              fill
              className="object-contain object-left"
              sizes="(max-width: 1024px) 40vw, 28vw"
              priority
            />
          </div>
          <div className="pointer-events-none select-none absolute inset-y-0 right-0 w-[36%] sm:w-[32%] lg:w-[28%]">
            <Image
              src="/images/cta/right.png"
              alt="Truck right"
              fill
              className="object-contain object-right"
              sizes="(max-width: 1024px) 40vw, 28vw"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 py-12 sm:py-14 md:py-16 grid place-items-center text-center px-6">
            <h2 className="max-w-3xl text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Simplify your logistics with easy
              <br className="hidden sm:block" /> booking & real‑time tracking
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600 text-sm sm:text-base">
              From pickup to global delivery, ShipMate makes shipping simple, transparent, and stress‑free. We handle the complexity so you can focus on what matters most.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-md hover:opacity-95 transition"
              >
                Calculate Now
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}