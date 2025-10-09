"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"

type ServiceKey =
  | "empty-container"
  | "export-import"
  | "project-cargo"
  | "chemical"
  | "bulk-cargo"
  | "high-value"
  | "warehousing"
  | "lcl"

type ServiceConfig = {
  key: ServiceKey
  label: string
  imageSrc: string
  imageAlt: string
  heading: string
  description: string
  benefits: string[]
}

const SERVICES: ServiceConfig[] = [
  {
    key: "empty-container",
    label: "Empty Container Transportation",
    imageSrc: "/images/our-solution/road.avif",
    imageAlt: "Empty container transportation",
    heading: "Empty Container Transportation",
    description:
      "Pioneers in empty container movement across all major ports and ICDs. Cost-effective solutions with industry-leading turnaround times.",
    benefits: ["40% cost savings", "24/7 availability", "pan-India coverage"],
  },
  {
    key: "export-import",
    label: "Export & Import Containers",
    imageSrc: "/images/our-solution/ship.avif",
    imageAlt: "Export import containers",
    heading: "Export & Import Containers",
    description:
      "Full-service container logistics for 20ft, 40ft, and 45ft units. Seamless port-to-door connectivity with real-time tracking.",
    benefits: ["Zero documentation delays", "customs clearance support", "damage-free delivery"],
  },
  {
    key: "project-cargo",
    label: "Project Cargo Management",
    imageSrc: "/images/our-solution/railway.avif",
    imageAlt: "Project cargo management",
    heading: "Project Cargo Management",
    description:
      "Oversized and heavy machinery transportation with route surveys, permits, and specialized vehicles. No cargo too complex.",
    benefits: ["Custom engineering solutions", "permit management", "dedicated project managers"],
  },
  {
    key: "chemical",
    label: "Chemical Transportation",
    imageSrc: "/images/our-solution/airway.avif",
    imageAlt: "Chemical transportation",
    heading: "Chemical Transportation",
    description:
      "Certified hazardous and non-hazardous chemical transport with safety-trained drivers and compliant vehicles.",
    benefits: ["ADR-certified drivers", "emergency response protocols", "insurance coverage"],
  },
  {
    key: "bulk-cargo",
    label: "Bulk Cargo Solutions",
    imageSrc: "/images/our-solution/road.avif",
    imageAlt: "Bulk cargo solutions",
    heading: "Bulk Cargo Solutions",
    description:
      "Steel coils, grains, construction materials, and industrial goods with optimized vehicle configurations.",
    benefits: ["Load optimization", "reduced handling damage", "flexible scheduling"],
  },
  {
    key: "high-value",
    label: "High-Value Goods Escort",
    imageSrc: "/images/our-solution/ship.avif",
    imageAlt: "High-value goods escort",
    heading: "High-Value Goods Escort",
    description: "Armed security escort services with GPS tracking for valuable and sensitive cargo shipments.",
    benefits: ["24/7 surveillance", "trained security personnel", "comprehensive insurance"],
  },
  {
    key: "warehousing",
    label: "Warehousing & Storage",
    imageSrc: "/images/our-solution/railway.avif",
    imageAlt: "Warehousing and storage",
    heading: "Warehousing & Storage",
    description: "Climate-controlled facilities near major ports with inventory management and last-mile distribution.",
    benefits: ["Strategic locations", "inventory tracking", "flexible storage terms"],
  },
  {
    key: "lcl",
    label: "LCL Consolidation",
    imageSrc: "/images/our-solution/airway.avif",
    imageAlt: "LCL consolidation",
    heading: "LCL Consolidation",
    description: "Small package delivery across India with consolidated shipping for cost-effective transportation.",
    benefits: ["Reduced shipping costs", "weekly consolidations", "nationwide reach"],
  },
]

export default function OurSolution() {
  const sectionRef = useRef<HTMLElement>(null)
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])

  const [activeServiceIndex, setActiveServiceIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  // Intersection Observer to detect which service is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    serviceRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveServiceIndex(index)
            }
          },
          {
            threshold: [0.5],
            rootMargin: "-20% 0px -20% 0px",
          },
        )

        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Handle scroll events for smooth transitions and sticky behavior
  useEffect(() => {
    let timer: number | undefined

    const handleScroll = () => {
      setIsScrolling(true)
      if (timer) window.clearTimeout(timer)
      timer = window.setTimeout(() => setIsScrolling(false), 150)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timer) window.clearTimeout(timer)
    }
  }, [])

  const activeService = SERVICES[activeServiceIndex]

  return (
    <section
      id="our-solution"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 via-cyan-200/30 to-indigo-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-indigo-200/40 via-blue-200/30 to-cyan-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 via-cyan-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600">
              OUR SERVICES
            </span>
            <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"></div>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
              Complete Logistics
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600">
              Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of logistics services designed to meet your transportation needs with
            precision and reliability.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Fixed Left Image Card */}
          <div className="lg:w-1/2 order-2 lg:order-1 lg:self-start lg:sticky lg:top-24">
            <div className="relative group">
              {/* Card Container */}
              <div className="relative rounded-3xl bg-white shadow-2xl shadow-blue-500/20 border border-blue-100/50 backdrop-blur-sm">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-indigo-500/20 p-[2px]">
                  <div className="w-full h-full rounded-3xl bg-white"></div>
                </div>

                {/* Image Container */}
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-3xl">
                  <Image
                    key={activeService.imageSrc}
                    src={activeService.imageSrc || "/placeholder.svg"}
                    alt={activeService.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover transition-all duration-700 ease-in-out ${
                      isScrolling ? "scale-105" : "scale-100"
                    } group-hover:scale-110`}
                    priority
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-800/20 to-transparent"></div>

                  {/* Service indicator */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                          Service {activeServiceIndex + 1} of {SERVICES.length}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight">{activeService.heading}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-indigo-400/30 to-blue-400/30 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Right Side - Scrollable Services */}
          <div className="space-y-8 order-1 lg:order-2 lg:w-1/2 lg:flex-shrink-0">
            {SERVICES.map((service, index) => (
              <div
                key={service.key}
                ref={(el) => (serviceRefs.current[index] = el)}
                className={`relative transition-all duration-500 ${
                  activeServiceIndex === index ? "transform scale-105" : "transform scale-100 opacity-75"
                }`}
              >
                {/* Service Card */}
                <div className="relative group">
                  {/* Background card */}
                  <div
                    className={`relative rounded-3xl p-8 sm:p-10 transition-all duration-500 ${
                      activeServiceIndex === index
                        ? "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white shadow-2xl shadow-blue-500/30"
                        : "bg-white/80 backdrop-blur-sm text-slate-700 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/20"
                    } border border-white/20`}
                  >
                    {/* Active service background animation */}
                    {activeServiceIndex === index && (
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-indigo-500/20 animate-pulse"></div>
                    )}

                    <div className="relative z-10">
                      {/* Service number and label */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-2xl font-bold text-lg transition-all duration-300 ${
                            activeServiceIndex === index
                              ? "bg-white/20 text-white"
                              : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div
                          className={`h-[2px] flex-1 rounded-full transition-all duration-300 ${
                            activeServiceIndex === index ? "bg-white/30" : "bg-gradient-to-r from-blue-500 to-cyan-500"
                          }`}
                        ></div>
                      </div>

                      {/* Content */}
                      <h3
                        className={`text-2xl sm:text-3xl font-bold mb-4 leading-tight transition-colors duration-300 ${
                          activeServiceIndex === index ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {service.heading}
                      </h3>

                      <p
                        className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${
                          activeServiceIndex === index ? "text-blue-100" : "text-slate-600"
                        }`}
                      >
                        {service.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-3 mb-8">
                        <h4
                          className={`text-sm font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300 ${
                            activeServiceIndex === index ? "text-blue-200" : "text-slate-500"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              activeServiceIndex === index ? "bg-cyan-400" : "bg-blue-500"
                            }`}
                          ></div>
                          Key Benefits
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-3 group/benefit">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/benefit:scale-110 ${
                                  activeServiceIndex === index
                                    ? "bg-white/20 text-white"
                                    : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                                }`}
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  ></path>
                                </svg>
                              </div>
                              <span
                                className={`text-sm font-medium transition-colors duration-300 ${
                                  activeServiceIndex === index ? "text-blue-100" : "text-slate-600"
                                }`}
                              >
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      {activeServiceIndex === index && (
                        <div className="animate-fadeIn">
                          <button
                            type="button"
                            onClick={() => {
                              const element = document.getElementById("contact")
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth" })
                              }
                            }}
                            className="group inline-flex items-center rounded-2xl bg-white text-blue-700 pl-6 pr-3 py-4 text-sm font-bold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <span className="relative z-10">Get Quote for {service.label}</span>
                            <span className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-200 transition-all duration-300 relative z-10">
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
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col gap-3">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                serviceRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                })
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeServiceIndex === index
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 scale-125"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
